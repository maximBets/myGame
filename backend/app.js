require('@babel/register');
require('dotenv').config();

const express = require('express');
const serverConfig = require('./config/serverConfig');

const cardPageApiRouter = require('./api/api.routes');

const app = express();
const PORT = process.env.PORT || 4000;

// * Config
serverConfig(app);

//* Routing
app.use('/api', cardPageApiRouter);
//* Listening
app.listen(PORT, () => {
  console.log(`Server started by ${PORT} port`);
});
