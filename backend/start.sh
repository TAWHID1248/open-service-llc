#!/bin/bash
set -e

echo "Running migrations..."
python manage.py migrate

echo "Seeding data..."
python manage.py seed_data || echo "Seed data already exists or error occurred (continuing...)"

echo "Starting Gunicorn..."
exec gunicorn config.wsgi --bind 0.0.0.0:8000 --workers 2 --timeout 60
