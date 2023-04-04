const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    googleId: String,
    facebookId: String,
    email: { 
        type: String, 
    },
    firstname: { 
        type: String, 
        required: true 
    },
    lastname: { 
        type: String, 
        required: true 
    },
    password: { 
        type: String, 
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('User', userSchema);