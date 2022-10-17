const mongoose = require('mongoose');
const bookSchema = require('../model/Books');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {

        type: String,
        required: true
    },
    role: {
        User: {
            type: Number,
            default: 1001
        },
        Admin: Number,
    },
    password: {
        type: String,
        required: true
    },
    first_name: {

        type:String
    },
    last_name: {
        type: String
    },
    //references the books from Model Schema books One to Many 
    bookshelf :[{type: Schema.Types.ObjectId, ref: "Book"}], 

});

module.exports = mongoose.model('User', userSchema);