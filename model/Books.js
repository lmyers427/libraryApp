const mongoose = require('mongoose');
const { stringify } = require('uuid');
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
    image: {

        type: String,
    },
    summary: {

        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
        // rent: {
        //     availability: Boolean,
        //     daysToRent: Number,
        //     waitlist: Number,
        // },
        // buy: {
            
        //     price: Number
        // },
        // owned: {
        //     type: Schema.Types.ObjectId, ref: 'User'
        // },
    },

});

module.exports = mongoose.model('Book', bookSchema);