# Step 1: Build the Angular app using Node.js
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the Angular app for production
RUN npm run build -- --configuration production --project try

# Step 2: Serve the Angular app using nginx
FROM nginx:alpine

# Copy the built Angular app (browser folder) to nginx's html directory
COPY --from=build /app/dist/try/browser /usr/share/nginx/html

# Expose port 80 for the HTTP server
EXPOSE 80

# Start nginx to serve the Angular app
CMD ["nginx", "-g", "daemon off;"]