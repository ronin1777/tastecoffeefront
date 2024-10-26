# Stage 1: Build
FROM hub.hamdocker.ir/node:20 as builder
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./
# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .
# Build the application
RUN npm run build

# Stage 2: Run
FROM hub.hamdocker.ir/node:20 as runner
WORKDIR /app
ENV NODE_ENV=production

# Copy built files from the builder stage
COPY --from=builder /app/ ./

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]