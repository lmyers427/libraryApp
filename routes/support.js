const express = require('express');
const router = express.Router();
const path = require('path');
const supportController = require('../controllers/supportController');

router.get('/', (req, res) => {
    res.render(path.join(__dirname, '..', 'views', 'support')); //with ejs updated to render
    
});

//Register new support ticket
router.post('/', supportController.NewTicket);

module.exports = router;