const mongoose = require('mongoose');
const bookSchema = require('../model/Books');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {

        type: String,
        required: true
    },
    roles: {
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
    email: { 

        work: {type: mongoose.SchemaTypes.Email, allowBlank: true},
        personal: mongoose.SchemaTypes.Email
         
    },
    bookshelf :[{type: Schema.Types.ObjectId, ref: "Books"}] //not 100% sure if this is correct will need to test

});

module.exports = mongoose.model('User', userSchema);