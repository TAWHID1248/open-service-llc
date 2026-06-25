FROM python:3.13-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    postgresql-client \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements and install Python dependencies
COPY requirements.txt .
RUN pip install --upgrade pip setuptools wheel && \
    pip install --no-cache-dir --no-deps -r requirements.txt

# Copy project files
COPY . .

# Create necessary directories
RUN mkdir -p /app/staticfiles /app/media

# Collect static files (optional, may fail in build)
RUN python manage.py collectstatic --noinput 2>/dev/null || true

# Expose port
EXPOSE 8000

# Start Gunicorn directly
CMD ["sh", "-c", "python manage.py migrate --noinput && python manage.py seed_data 2>/dev/null || true && gunicorn config.wsgi --bind 0.0.0.0:8000 --workers 2 --timeout 60"]
