# Use an official Node.js runtime as the base image
FROM node:21

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the entire application to the working directory
COPY . .

# Install dependencies
RUN npm install

# Expose the port Next.js is running on
EXPOSE 3000

# Start the Next.js development server
CMD ["npm", "run", "dev"]
