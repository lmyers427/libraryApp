const User = require('../model/Users');
const bcrypt = require('bcrypt');

const NewUser = async (req, res) => {

    const {user, pwd} = req.body; //may change depending on HTML
    if(!user || !pwd) return res.status(400).json({'message':'Username and password required'});

    const duplicate = await User.findOne({username: user}).exec();


    if(duplicate) return res.redirect(301, /*have to put something here not sure what?*/  ); //redirect to login page

    try{

        const hashedPwd = await bcrypt.hash(pwd, 10); //encrypts password

        //create user
        const result = await User.create({
            "username": user,
            "password": hashedPwd

        });

        console.log(result); //logs result to console

        res.status(201).json({'success': `New user ${user} created!`});

    }catch(error){

        res.status(500)

    }


}