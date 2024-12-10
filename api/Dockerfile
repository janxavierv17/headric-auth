FROM node:22-alpine

# Set a non-root user for better security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /api

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy application code
COPY . .

# Change ownership to non-root user
RUN chown -R appuser:appgroup /api
USER appuser

EXPOSE 8000

CMD ["npm", "run", "dev"]
