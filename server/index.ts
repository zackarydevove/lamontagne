const express = require('express');
const { Sequelize } = require('sequelize');
const configureMiddleware = require('./middleware/index');
const { connectToDatabase } = require('./config/database');
const authRoutes = require('./routes/auth');

const PORT = process.env.PORT || 5000;

const app = express();

connectToDatabase();
configureMiddleware(app);

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});