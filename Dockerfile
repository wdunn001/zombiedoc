FROM socialengine/nginx-spa:latest
COPY dist/zombiedoc /app
EXPOSE 80
