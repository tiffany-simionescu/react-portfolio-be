// Dependencies
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// Routers
const userRouter = require('../routers/user-router');
const reactProjectRouter = require('../routers/react-project-router');
const reduxProjectRouter = require('../routers/redux-project-router');
const nodeProjectRouter = require('../routers/node-project-router');
const sqliteProjectRouter = require('../routers/sqlite-project-router');
const postgresqlProjectRouter = require('../routers/postgresql-project-router');

// Server
const server = express();

// Middleware
server.use(helmet());
server.use(express.json());
server.use(cors());

// Routes
server.use('/api/users', userRouter);
server.use('/api/reactprojects', reactProjectRouter);
server.use('/api/reduxprojects', reduxProjectRouter);
server.use('/api/nodeprojects', nodeProjectRouter);
server.use('/api/sqliteprojects', sqliteProjectRouter);
server.use('/api/postgresqlprojects', postgresqlProjectRouter);

// Root Endpoint
server.get('/', (req, res) => {
  res.status(200).json({
    message: "Welcome to Tiffany Simionescu's Portfolio Backend!"
  })
})