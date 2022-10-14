const express = require('express');
const router = express.Router();
const path = require('path');
const loginController = require('../controllers/loginController');

router.get('/', (req, res) => {
    console.log("This is the get login router");
    res.sendFile(path.join(__dirname, '..', 'views', 'login.html'));
    
});

router.post('/', loginController.ExistingUser);

module.exports = router;