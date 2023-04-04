const { Sequelize } = require('sequelize');
const config = require('../config');

const sequelize = new Sequelize(config.development);

async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports = { connectToDatabase, sequelize };