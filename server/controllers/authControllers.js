const bcrypt = require('bcryptjs');
const User = require('../models/UserModel');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const CLIENT_URL = process.env.CLIENT_URL;


module.exports.register = (req, res) => {
    User.findOne({ $or: [{ email: req.body.email }, { username: req.body.username }] })
    .then((user) => {
        if (user) {
            if (user.email === req.body.email && user.username === req.body.username) {
                console.log('Email and username already used');
                res.json({message: 'Email and username already used'});
            }
            else if (user.email === req.body.email) {
                console.log('Email already used')
               res.json({message: 'Email already used!'});
            } else if (user.username === req.body.username) {
                console.log('Username already used');
               res.json({message: 'Username already used'});
            }
        } else {
            if (req.body.password === req.body.confirmPassword) {
                bcrypt.hash(req.body.password, 10)
                .then((hashedPassword) => {
                    const newUser = new User({
                        username: req.body.username,
                        twittername: req.body.username,
                        email: req.body.email,
                        password: hashedPassword
                    })
                    newUser.save()
                    .then((response) => {
                        console.log('new user created:\n', response, '\n');
                        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET)
                        res.status(200).json({ token: token, message: 'User successfully created and authenticated' });
                    })
                    .catch((err) => console.log(err));
                })
                .catch((err) => console.log(err));
            } else {
                res.status(401).json({message: 'Password doesnt match'});
            }
        }
    })
    .catch((err) => console.log(err));
};

module.exports.login = (req, res, next) => {
    console.log(req.body);
    User.findOne({ $or: [{ email: req.body.usernameOrEmail }, { username: req.body.usernameOrEmail }] })
      .then(user => {
        if (!user) {
            console.log('User not found')
            return res.status(401).json({ message: 'Authentication failed' });
        }
        console.log('User found:', user);
        bcrypt.compare(req.body.password, user.password)
          .then(isMatch => {
            if (isMatch) {
                console.log(user, 'Successfully Authenticated')
                const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
                res.status(200).json({ token: token, message: 'Successfully Authenticated' });
            } else {
                console.log('Wrong password')
                res.status(401).send('Authentication failed');
            }
          });
      })
      .catch(err => {
        res.status(500).json({ message: 'Internal server error' });
      });
}