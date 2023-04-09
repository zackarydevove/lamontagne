import { Application } from "express";
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');

const configureMiddleware = (app: Application): void => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(
    cors({
      origin: process.env.CLIENT_URL,
      credentials: true,
    })
  );
};

module.exports = configureMiddleware;