const express = require('express');
const router = express.Router();
const path = require('path');
const bookController = require('../controllers/bookController');


router.get('/', (req, res) => {
    let message = req.session.message;
    res.render(path.join(__dirname, '..', 'views', 'books'), {message: message}); //with ejs updated to render
    
});

router.post('/', bookController.createNewBook);


module.exports = router;