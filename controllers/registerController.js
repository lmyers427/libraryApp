const User = require('../model/Users');
const bcrypt = require('bcrypt');

const NewUser = async (req, res) => {

    const {username, password} = req.body; //may change depending on HTML
    if(!username || !password) return res.status(400).json({'message':'Username and password required'});

    const duplicate = await User.findOne({username: username}).exec();


    if(duplicate) return res.render('../views/login.ejs', { message: req.session.message = 'Username Already Exists' });

    try{

        // //create user
        // const result = await User.create({
        //     "username": username,
        //     "password": password,
        //     "email": req.body.email,
        //     "first_name": req.body.fname,
        //     "last_name": req.body.lname

        // });
        //test out before posting to Database :)

        const newUser = new User();
        newUser.username = username;
        newUser.password = password;
        newUser.email = req.body.email;
        newUser.first_name = req.body.fname;
        newUser.last_name = req.body.lname;
        const result = await newUser.save();

        res.render('../views/login.ejs', {message: req.session.message = 'User successfully created. Please Login'});
    
    }catch(error){

        res.status(500)

    }


}

module.exports = {

    NewUser
}