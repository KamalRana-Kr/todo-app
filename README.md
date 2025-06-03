# Todo List REST API with Authentication and CRON Job

This project is a REST API built with Node.js, ExpressJS, Mongoose, MongoDB, and TypeScript.
It allows authenticated users to manage their todo items with full CRUD operations
and includes a CRON job to update the status of expired todos automatically.

---

## Setup & Installation Guide

Prerequisites:

- Node.js (version 20 or above)
- MongoDB instance (local or cloud)
- npm (comes with Node.js) or yarn

## Step 1: Clone the Repository

Open your terminal and run:

    git clone https://github.com/yourusername/todo-api.git
    cd todo-api

## Step 2: Install Dependencies

Install all required packages:

    npm install

## Step 3: (Optional) Install TypeScript & Types Manually

If you want to install or update TypeScript and related packages, run:

    npm install express mongoose bcrypt jsonwebtoken dotenv node-cron
    npm install -D typescript ts-node-dev @types/node @types/express @types/bcrypt @types/jsonwebtoken @types/mongoose @types/node-cron

## Step 4: Initialize TypeScript Configuration (If not present)

If you don’t have a tsconfig.json file, create one by running:

    npx tsc --init

Replace the generated content with the following recommended configuration:

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

## Step 5: Set Environment Variables

Create a `.env` file in the root directory with the following content:

    PORT=5000
    MONGO_URI=mongodb://localhost:27017/db_todo
    JWT_SECRET=your_secret_key_here
    NODE_ENV=dev

- Replace `your_secret_key_here` with a strong secret string.
- Adjust `MONGO_URI` if you use a cloud database.

## Step 6: Create the MongoDB Database

Using MongoDB Compass or Mongo Shell, create a database named:

    db_todo

If MongoDB is running locally, it will auto-create this database when the app inserts data.

## Step 7: Run the Project

Development mode (with live reload):

    npm run dev

This will run the server using ts-node-dev, compiling and running TypeScript files on the fly.

## Step 8: Build the Project (Optional for Production)

To compile TypeScript files into JavaScript in the dist/ folder:

    npm run build

## Step 9: Run the Compiled Project

After building, run the compiled JavaScript files:

    npm run start

## Step 10: Access API Documentation

Once the server is running, open:

    http://localhost:5000/api-docs/

This page lists all available API endpoints and how to use them.

## Step 11: Cron Job Setup

The project uses a CRON job to automatically update expired todos daily.

- CRON job code location: cron-job/expireTodoJob.ts
- Scheduling is done using node-cron.
- If not installed, install node-cron via:

  npm install node-cron

The CRON job runs automatically when the server starts.

---

Summary of Useful Commands:

npm install - Install all dependencies
npm run dev - Run in development mode (live reload)
npm run build - Compile TypeScript to JavaScript
npm run start - Run the compiled JavaScript
