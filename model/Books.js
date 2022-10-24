const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = require('../model/Users');

const bookSchema = new Schema({

    title: {

        type: String,
        required: true
    },
    author: {

        type: String,
        required: true
    },
    summary: {

        type: String,
        required: true
    },
    status: {
        rent: {
            availability: Boolean,
            daysToRent: Number,
            waitlist: Number,
        },
        buy: {
            
            price: Number
        },
        owned: {
            type: Schema.Types.ObjectId, ref: 'User'
        },
    },

});

module.exports = mongoose.model('Book', bookSchema);