// Dependencies
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// Routers
const userRouter = require('../routers/user-router');

// Server
const server = express();

// Middleware
server.use(helmet());
server.use(express.json());
server.use(cors());

// Routes
server.use('/api/users', userRouter);

// Root Endpoint
server.get('/', (req, res) => {
  res.status(200).json({
    message: "Welcome to Tiffany Simionescu's Portfolio Backend!"
  })
})