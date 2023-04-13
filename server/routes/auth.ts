import authenticateJWT from '../middleware/jwtAuth'
import express from 'express';
import { login, register, getUser } from '../controllers/authControllers';

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.get('/getUser', authenticateJWT, getUser);

export default router;