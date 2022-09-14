const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    username: {

        type: Sting,
        required: true
    },
    roles: {
        User: {
            type: Number,
            default: 1001
        },
        Admin: Number
    },
    password: {
        type: String,
        required: true
    }


});

module.exports = mongoose.model('User', userSchema);