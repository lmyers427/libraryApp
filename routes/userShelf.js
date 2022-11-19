const express = require('express');
const router = express.Router();
const path = require('path');
const shelfController = require('../controllers/shelfController');
const { route } = require('./root');

router.get('/', shelfController.getUserShelf);

router.post('/add', shelfController.addBookToShelf);

router.post('/remove', shelfController.removeFromShelf);




module.exports = router;