const mongoose = require('mongoose');
const path = require('path');
const { stringify } = require('uuid');
const Schema = mongoose.Schema;
const userSchema = require('../model/Support');

const supportSchema = new Schema({

    Recommendation: {

        type: String,
        required: true
    },
    TechnicalDifficulty: {

        type: String,
        required: true
    }

});



module.exports = mongoose.model('Support', supportSchema);
