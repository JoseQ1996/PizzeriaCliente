FROM node:alpine AS pizzeriaApp
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# stage 2

FROM nginx:alpine
COPY --from=pizzeriaApp /app/dist/* /usr/share/nginx/html
EXPOSE 80
 