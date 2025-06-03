# Todo List REST API with Authentication and CRON Job

This project is a **REST API** built using **Node.js**, **ExpressJS**, **Mongoose**, **MongoDB**, and **TypeScript**. It allows users to manage their todo items with full **CRUD** operations, includes **authentication** features, and sets up a **CRON job** to update the status of expired todo items.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Prerequisites](#prerequisites)
- [Installation Steps](#installation-steps)
- [Environment Variables](#environment-variables)
- [Run the Project](#run-the-project)
- [Build the Project](#build-the-project)
- [API Documentation](#api-documentation)
- [Cron Job Setup](#cron-job-setup)

## Project Overview

This API provides the following functionality:

### Authentication:

- Auth module for Users can **sign up** and **log in** to generate JWT access tokens for authentication.

### CRUD Operations on Todo Items:

- **Create**, **Read**, **Update**, and **Delete** operations for todo items.
- Each todo item is associated with a user and can only be managed by that user.

### Automatic Todo Expiration Handling:

- A **CRON job** runs daily to automatically update the status of expired todos.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for building REST APIs.
- **Mongoose**: MongoDB ODM (Object Document Mapping) for interacting with MongoDB.
- **MongoDB**: NoSQL database to store todo items.
- **TypeScript**: Strongly typed superset of JavaScript to ensure type safety.
- **JWT (JSON Web Token)**: Token-based authentication.
- **Bcrypt.js**: For securely hashing passwords.
- **Cron**: For scheduling and running periodic tasks (like updating expired todo items).
- **dotenv**: For managing environment variables.
- **helmet**: HTTP headers security middleware for Express apps. It helps protect applications from some well-known web vulnerabilities by setting appropriate HTTP headers
- **Node-cron**: For handling cron job scheduling in Node.js.
- **CORS**: Middleware for enabling cross-origin requests in Express.
- **Joi**: Data validation library used for input validation in the API.
- **ts-node**: TypeScript execution engine for running TypeScript code directly.
- **ts-node-dev**: Improved version of `ts-node` with live reload capabilities, useful for development.

### Development Dependencies

- **@types/cors**: TypeScript definitions for `cors` middleware.
- **@types/joi**: TypeScript definitions for `joi`.
- **@types/node-cron**: TypeScript definitions for `node-cron`.
- **@types/bcrypt**: TypeScript definitions for `bcrypt`.
- **@types/express**: TypeScript definitions for `express`.
- **@types/jsonwebtoken**: TypeScript definitions for `jsonwebtoken`.
- **@types/mongoose**: TypeScript definitions for `mongoose`.
- **@types/node**: TypeScript definitions for Node.js.

## Setup Instructions

### Prerequisites:

- Node.js >= 20.x
- MongoDB instance (either locally or using MongoDB Atlas)
- A package manager (npm/yarn)

### Installation Steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/todo-api.git
   cd todo-api
   ```

2. **Install dependencies**:
   Install all required dependencies:

   npm install

3. **Install TypeScript and TypeScript-related dependencies**:
   Not required : To set up TypeScript, you need to install the following:

   npm install express mongoose bcrypt jsonwebtoken dotenv node-cron
   npm install -D typescript ts-node-dev @types/node @types/express @types/bcrypt @types/jsonwebtoken @types/mongoose

4. **Initialize TypeScript configuration**:
   If you don't have a `tsconfig.json` file, create it by running:
   npx tsc --init

   Your `tsconfig.json` file should look like this:

   ```json
   {
     "compilerOptions": {
       "target": "ES6",
       "module": "commonjs",
       "esModuleInterop": true,
       "strict": true,
       "skipLibCheck": true,
       "forceConsistentCasingInFileNames": true,
       "outDir": "./dist",
       "rootDir": "./src"
     },
     "include": ["src/**/*"],
     "exclude": ["node_modules"]
   }
   ```

### Environment Variables:

### Create a `.env` file in the root directory and add the following variables:

    - env file
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/db_todo
    JWT_SECRET=your_secret_key
    NODE_ENV=dev

### Run the Project:

    To run the project in **development mode** (using TypeScript without building it first), use:
    npm run dev

### Creating automatic database in MongoDB Compass

- Database : db_todo

### Build the Project:

    npm run build [This will output compiled files in the dist/ folder.]

### run the compiled project

    npm run start

### API Documentation

    Swagger API doc link
    - http://localhost:5000/api-docs/

### Cron Job Setup

    npm install node-cron - File - cron-job/expireTodoJob.ts
