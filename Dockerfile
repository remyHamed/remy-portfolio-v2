# Étape 1 : build
FROM node:20 AS builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run dev

# Étape 2 : image légère pour servir
FROM nginx:alpine

# Copie les fichiers de build dans Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copie une config Nginx personnalisée si besoin
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
