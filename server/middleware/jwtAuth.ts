import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

interface ExtendedRequest extends Request {
  user?: JwtPayload;
}

const authenticateJWT = (req: ExtendedRequest, res: Response, next: NextFunction): void => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      throw new Error('Token not found');
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET as string);
    if (typeof decodedToken === 'string') {
      throw new Error('Invalid token format');
    }
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed' });
  }
};

export default authenticateJWT;