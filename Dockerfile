# Use a lightweight Nginx image to serve static files
FROM nginx:alpine

# Copy all files from the current directory to the Nginx web folder
COPY . /usr/share/nginx/html
