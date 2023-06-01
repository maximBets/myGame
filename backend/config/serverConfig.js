const express = require('express');
const session = require('express-session');
const path = require('path');
const sessionConfig = require('./sessionCofig');

const serverConfig = (app) => {
  app.use(session(sessionConfig));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, '..', 'public')));
};

module.exports = serverConfig;
