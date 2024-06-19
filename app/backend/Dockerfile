# Use a imagem base do Python
FROM python:3.9-slim


WORKDIR /app/backend
COPY ./requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

