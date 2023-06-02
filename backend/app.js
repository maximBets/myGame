require('@babel/register');
require('dotenv').config();

const express = require('express');
const serverConfig = require('./config/serverConfig');

const themeApiRouter = require('./api/theme.routes');
const authRouter = require('./api/theme.routes');

const app = express();
const PORT = process.env.PORT || 4000;

// * Config
serverConfig(app);

//* Routing
app.use('/api', themeApiRouter);
app.use('/auth', authRouter);
//* Listening
app.listen(PORT, () => {
  console.log(`Server started by ${PORT} port`);
});
