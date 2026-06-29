# Stage 1: build frontend
FROM node:20-alpine AS frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm ci
COPY frontend/ ./
RUN npm run build

# Stage 2: backend + serve
FROM python:3.13-slim
WORKDIR /app

# Install build deps needed for psycopg2-binary on slim image
RUN apt-get update && apt-get install -y --no-install-recommends gcc libpq-dev && rm -rf /var/lib/apt/lists/*

# Install dependencies
COPY backend/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend source
COPY backend/ ./

# Collect Django's own static files (admin, etc.) first
RUN python manage.py collectstatic --noinput

# Copy built frontend into staticfiles so whitenoise serves it
# and TemplateView can find index.html (TEMPLATES DIRS includes staticfiles/)
COPY --from=frontend-build /app/frontend/dist/ ./staticfiles/

EXPOSE 8000

CMD ["sh", "-c", "python manage.py migrate --noinput && python manage.py seed_data; gunicorn config.wsgi --bind 0.0.0.0:${PORT:-8000}"]
