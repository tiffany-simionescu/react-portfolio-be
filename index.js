require('dotenv').config();

const server = require('./api/server');

const host = process.env.HOST || "0.0.0.0";

const port = process.env.PORT || 5050;

server.listen(port, host, () => {
  console.log(`API is alive! -- http://${host}:${port}`)
})