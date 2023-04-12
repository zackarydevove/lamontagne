import express from 'express';
import { PrismaClient } from '@prisma/client';
import configureMiddleware from './middleware/index';
import authRoutes from './routes/auth';

const PORT = process.env.PORT || 5000;
const app = express();
export const prisma = new PrismaClient()

configureMiddleware(app);

app.use('/api/auth', authRoutes);

// Connect to the database and log a message
prisma.$connect()
  .then(() => {
    console.log('Connected to the database successfully.');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 