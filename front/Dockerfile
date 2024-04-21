# Stage 1: Build the Angular app
FROM node:16.14 as build
WORKDIR /app
COPY package*.json ./

COPY . .
RUN npm install
RUN npm run build --prod

# Stage 2: Serve the Angular app using Nginx
FROM nginx:alpine
COPY --from=build /app/dist/pfe/front /usr/share/nginx/html
EXPOSE 83
CMD ["nginx", "-g", "daemon off;"]
