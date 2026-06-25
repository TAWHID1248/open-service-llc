FROM python:3.13-slim

WORKDIR /app

RUN apt-get update && apt-get install -y postgresql-client gcc && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --upgrade pip && pip install -r requirements.txt

COPY . .

EXPOSE 8000

CMD sh -c "python manage.py migrate --noinput 2>/dev/null; python manage.py seed_data 2>/dev/null; gunicorn config.wsgi --bind 0.0.0.0:8000 --workers 2"
