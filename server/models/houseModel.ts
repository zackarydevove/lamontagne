const mongoose = require('mongoose');

const houseSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    squaremetter: {
        type: Number,
        required: true,
    },
    rooms: {
        type: Number,
        required: true,
    },
    bedrooms: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('User', userSchema);