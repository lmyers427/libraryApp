const express = require('express');
const router = express.Router();
const path = require('path');
const registerController = require('../controllers/registerController');

router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.post('/', (req, res) =>{

 registerController.NewUser

});


module.exports = router;