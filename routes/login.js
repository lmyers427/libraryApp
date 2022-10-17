const express = require('express');
const router = express.Router();
const path = require('path');
const loginController = require('../controllers/loginController');

router.get('/', (req, res) => {
    console.log("This is the get login router");
    res.render(path.join(__dirname, '..', 'views', 'login')); //with ejs updated to render
    
});

router.post('/', loginController.ExistingUser);

module.exports = router;