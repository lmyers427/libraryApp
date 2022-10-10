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
         
    }
    //shelf: [mogoose.Schema]

});

module.exports = mongoose.model('User', userSchema);