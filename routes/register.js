const express = require('express');
const router = express.Router();
const path = require('path');
const registerController = require('../controllers/registerController');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'register.html'));
});

//Register new 
router.post('/', (req, res) =>{

    registerController.NewUser
    
    });

module.exports = router;