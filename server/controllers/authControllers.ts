import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import User from '../models/userModel';

const CLIENT_URL = process.env.CLIENT_URL;

interface RegisterRequestBody {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

interface LoginRequestBody {
  usernameOrEmail: string;
  password: string;
}

export const register = async (req: Request<{}, {}, RegisterRequestBody>, res: Response): Promise<void> => {
  try {
    const user = await User.findOne({ $or: [{ email: req.body.email }, { username: req.body.username }] });

    if (user) {
      if (user.email === req.body.email && user.username === req.body.username) {
        console.log('Email and username already used');
        res.json({ message: 'Email and username already used' });
      } else if (user.email === req.body.email) {
        console.log('Email already used');
        res.json({ message: 'Email already used!' });
      } else if (user.username === req.body.username) {
        console.log('Username already used');
        res.json({ message: 'Username already used' });
      }
    } else {
      if (req.body.password === req.body.confirmPassword) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
          username: req.body.username,
          twittername: req.body.username,
          email: req.body.email,
          password: hashedPassword,
        });

        const response = await newUser.save();
        console.log('new user created:\n', response, '\n');
        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET as string);
        res.status(200).json({ token: token, message: 'User successfully created and authenticated' });
      } else {
        res.status(401).json({ message: 'Password doesnt match' });
      }
    }
  } catch (err) {
    console.log(err);
  }
};

export const login = async (req: Request<{}, {}, LoginRequestBody>, res: Response): Promise<void> => {
  try {
    const user = await User.findOne({ $or: [{ email: req.body.usernameOrEmail }, { username: req.body.usernameOrEmail }] });

    if (!user) {
      console.log('User not found');
      res.status(401).json({ message: 'Authentication failed' });
    } else {
      console.log('User found:', user);
      const isMatch = await bcrypt.compare(req.body.password, user.password);

      if (isMatch) {
        console.log(user, 'Successfully Authenticated');
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET as string);
        res.status(200).json({ token: token, message: 'Successfully Authenticated' });
      } else {
        console.log('Wrong password');
        res.status(401).send('Authentication failed');
      }
    }
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
