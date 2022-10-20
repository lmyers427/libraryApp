const express = require('express');
const app = express();

const logOut = async (req, res) => {

    req.session.user = null
    req.session.save(function (err) {
      if (err) next(err)
  
      // regenerate the session, which is good practice to help
      // guard against forms of session fixation
    //   req.session.regenerate(function (err) {
    //     if (err) next(err)
    //     res.redirect('/')
    //   })
    })

    req.session.message =  "Thank you! You have successfully logged out";
    

    res.render('../views/login.ejs' , { message: req.session.message });
};

module.exports = {

    logOut

}

