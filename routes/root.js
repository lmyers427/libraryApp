const express = require('express');
const router = express.Router();
const path = require('path');

router.get('^/$|/home(.html)?', (req, res) => {
    const message = req.session.message;
    res.sendFile(path.join(__dirname, '..', 'views', 'home.html'), {message: message});
});



module.exports = router;