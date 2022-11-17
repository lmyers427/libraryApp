const express = require('express');
const router = express.Router();
const path = require('path');
const shelfController = require('../controllers/shelfController');

router.post('/add', shelfController.addBookToShelf);


module.exports = router;