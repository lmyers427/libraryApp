const express = require('express');
const router = express.Router();
const path = require('path');

router.get('^/$|/home(.html)?', (req, res) => {
    let message = req.session.message;
    if(!req.session.user) return res.render(path.join(__dirname, '..', 'views', 'login'), {message: req.session.message = "Please Login"} );
    
    res.render(path.join(__dirname, '..', 'views', 'home'), {message: message}); //updated for ejs
});



module.exports = router;