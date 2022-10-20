const express = require('express');
const router = express.Router();
const path = require('path');
const logoutController = require('../controllers/logoutController');

router.get('/', (req, res) => {
    let message = req.session.message;
    res.render(path.join(__dirname, '..', 'views', 'logout')); //updated for ejs
});

router.post('/', logoutController.logOut);

module.exports = router;
