const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    picture: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Hero', schema)