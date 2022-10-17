const express = require('express');
const router = express.Router();
const path = require('path');

router.get('^/$|/home(.html)?', (req, res) => {
    const message = req.session.message;
    res.render(path.join(__dirname, '..', 'views', 'home'), {message: message}); //updated for ejs
});



module.exports = router;