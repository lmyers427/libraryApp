const User = require('../model/Users');
const bcrypt = require('bcrypt');

const ExistingUser = async (req, res) => {

    const {uname, pwd} = req.body; //may change depending on HTML
    if(!uname || !pwd) return res.status(400).json({'message':'Username and password required'});

    const existingUname = await User.findOne({username: uname}).exec();

    if(!existingUname) return res.redirect('/register');

    if(existingUname.password === pwd) return res.redirect('./home');



}