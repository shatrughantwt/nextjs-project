FROM node:22-alpine

WORKDIR /app

# Copy only package files to install deps
COPY package*.json ./

# Install ALL dependencies (include devDependencies)
RUN npm install

# Copy full project
COPY . .

# Expose your dev port (Next.js = 3000, Node.js API = choose your own)
EXPOSE 3000

# Run development mode
CMD ["npm", "run", "dev"]
