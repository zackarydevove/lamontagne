const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');

const configureMiddleware = (app) => {
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