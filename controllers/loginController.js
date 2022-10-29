const User = require('../model/Users');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();



const ExistingUser = async (req, res) => {

    

    const {username, password} = req.body; //may change depending on HTML
    if(!username || !password) return res.status(400).json({'message':'Username and password required'});

    //Fetch existing user from Database 
    const existingUname = await User.findOne({username: username}).exec();

    

     //if User does not exist
     if(!existingUname) return res.render('../views/register.ejs', { message: req.session.message = 'Username Not Found' });


     //Create a variable to validate passwords
     const validatePW = await existingUname.comparePassword(password);
   
    //if Password does not match 
    if(!validatePW) return res.render('../views/login.ejs', { message: req.session.message =  `Incorrect password` });


    //If Login is successful
    
        req.session.message =  `${existingUname.username}`;
        req.session.user = existingUname.username;
        //Assigning session variable to User's assigned roles
        req.session.role = existingUname.role;
        console.log(req.session.role);
        res.render('../views/home.ejs', { message: req.session.message });

       



    
  

}


module.exports = {

    ExistingUser
}