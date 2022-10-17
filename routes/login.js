const express = require('express');
const router = express.Router();
const path = require('path');
const loginController = require('../controllers/loginController');

router.get('/', (req, res) => {
    let message = req.session.message;
    res.render(path.join(__dirname, '..', 'views', 'login'), {message: message}); //with ejs updated to render
    
});

router.post('/', loginController.ExistingUser);

module.exports = router;