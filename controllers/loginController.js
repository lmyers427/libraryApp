const User = require('../model/Users');
const bcrypt = require('bcrypt');


const ExistingUser = async (req, res) => {

    //console.log("made it to the login controller")
    const {username, password} = req.body; //may change depending on HTML
    if(!username || !password) return res.status(400).json({'message':'Username and password required'});

    const existingUname = await User.findOne({username: username}).exec();

    if(!existingUname) return res.status(400).json({'message':'user does not exist'});//Reload-HTML page with Error Message

    if(!(existingUname.password === password)) return res.status(400).json({'message':'password is incorrect'});//Reload-HTML page with Error Message

    
    //need to add response for when Login is Successful

    
    //res.status(201).json( {'message' : `successful match found for user ${existingUname.username}`});
   // add code for if successful login 

}


module.exports = {

    ExistingUser
}