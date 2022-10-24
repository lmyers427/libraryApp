const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.route('/')
    .post(bookController.createNewBook)

module.exports = router;