const express = require('express');
const router = express.Router();
const path = require('path');
const loginController = require('../controllers/loginController');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'login.html'));
});

//Validate existing user
router.get('/', (req, res) =>{

    loginController.ExistingUser
    
    });

module.exports = router;