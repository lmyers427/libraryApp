const express = require('express');
const router = express.Router();
const path = require('path');
const registerController = require('../controllers/registerController');

router.get('/', (req, res) => {
    let message = req.session.message;
    res.render(path.join(__dirname, '..', 'views', 'register'), {message: message} ); //ejs updated to render
});

//Register new user
router.post('/', registerController.NewUser);


module.exports = router;