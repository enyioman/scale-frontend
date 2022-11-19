FROM node:16-alpine as builder
ENV NODE_ENV production
# Add a work directory
WORKDIR /frontend

# Copy app files
COPY . .

# Install dependencies
RUN npm install -g npm@9.1.2

RUN npm install react-scripts@5.0.1 -g

# Build app
RUN npm run build


FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production

# Copy built assets from builder
COPY --from=builder /frontend/build /usr/share/nginx/html

# Remove default conf
RUN mv /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/confbackup.conf

# Add your nginx.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 