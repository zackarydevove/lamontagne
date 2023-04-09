import { Sequelize } from 'sequelize';
import config from '../config';

const sequelize = new Sequelize(config.development);

async function connectToDatabase(): Promise<void> {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export { connectToDatabase, sequelize };
