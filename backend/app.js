require('@babel/register');
require('dotenv').config();

const express = require('express');
const serverConfig = require('./config/serverConfig');

const app = express();
const PORT = process.env.PORT || 4000;

// * Config
serverConfig(app);

//* Routing

//* Listening
app.listen(PORT, () => {
  console.log(`Server started by ${PORT} port`);
});
