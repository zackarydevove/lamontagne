import bcrypt from 'bcryptjs';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response } from 'express';
import { prisma } from '../index';


const CLIENT_URL = process.env.CLIENT_URL;

interface RegisterRequestBody {
  email: string;
  password: string;
  confirmPassword: string;
  firstname: string;
  lastname: string;
}

interface LoginRequestBody {
  email: string;
  password: string;
}

export const register = async (req: Request<{}, {}, RegisterRequestBody>, res: Response): Promise<void> => {
  const { email, password, confirmPassword, firstname, lastname } = req.body;
  
  try {
    const user = await prisma.user.findUnique({ 
      where: {
        email: email 
      }
    });

    if (user && user.email === email) {
      console.log('Email already used');
      res.status(401).json({ message: 'Email already used' });
    } 
    else {
        if (password === confirmPassword) {
          const hashedPassword = await bcrypt.hash(password, 10);
          const newUser = await prisma.user.create({
            data: {
              email: email,
              password: hashedPassword,
              firstname: firstname,
              lastname: lastname,
            }
          });
          console.log(newUser, '\nnew user created:\n');
          const token = jwt.sign({ userId: newUser.user_id }, process.env.JWT_SECRET as string);
          res.status(200).json({ token: token, message: 'User successfully created and authenticated' });
        } 
        else {
          res.status(401).json({ message: 'Password doesnt match' });
        }
      }
  } 
  
  catch (err) {
    console.log(err, 'An error occured while creating user');
    res.status(401).json({ message: 'An error occured while creating user' });
  }
};

export const login = async (req: Request<{}, {}, LoginRequestBody>, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
        where: {
          email: email
        }
      });

    if (!user) {
      console.log('User not found');
      res.status(401).json({ message: 'User not found' });
    } 
    else {
      console.log(user, 'User found:');
      const isMatch = await bcrypt.compare(password, user.password);

      if (isMatch) {
        console.log(user, 'Successfully Authenticated');
        const token = jwt.sign({ userId: user.user_id }, process.env.JWT_SECRET as string);
        res.status(200).json({ token: token, message: 'Successfully Authenticated' });
      } else {
        console.log('Wrong password');
        res.status(401).json({ message: 'Authentication failed' });
      }
    }
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
};


export const getUser = async (req: Request, res: Response): Promise<void> => {
  const token = req.headers.authorization.split(' ')[1];
  const decoded: JwtPayload = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
  const userId: number = decoded.userId;

  console.log('id in getUser:', userId);

  try {
    const user = await prisma.user.findUnique({
      where: {
        user_id: userId,
      }
    })
    if (!user) {
      console.log('\nUser not found\n')
      res.status(401).json({ message: 'User not found' });
    } else {
      console.log('user in getUser:', user)
      res.status(200).json({ user: user, message: 'User found' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal server error' });
  }
}