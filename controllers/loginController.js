const User = require('../model/Users');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();



const ExistingUser = async (req, res) => {

    //console.log("made it to the login controller")
    const {username, password} = req.body; //may change depending on HTML
    if(!username || !password) return res.status(400).json({'message':'Username and password required'});

    const existingUname = await User.findOne({username: username}).exec();

    if(!existingUname) return res.redirect('/register');

    if (!(existingUname.password === password)) return res.status(400).json({'message':'password is incorrect'});//Reload-HTML page with Error Message

    
    //need to add response for when Login is Successful
    //return res.redirect('/', );

    //testing session variable
    function testSend(req, res) {
        req.session.message = 'login Successful';
        res.redirect('/');

    };
}


module.exports = {

    ExistingUser
}