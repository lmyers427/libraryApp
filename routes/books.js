const express = require('express');
const router = express.Router();
const path = require('path');
const bookController = require('../controllers/bookController');
const ROLES_LIST = require('../config/roles_list');
const verifyRoles = require('../middleware/verifyRoles');





router.get('/', (req, res) => {
    
    res.render(path.join(__dirname, '..', 'views', 'books'), {message: ' '}); //with ejs updated to render
    
});

//verifies roles before allowing user to create a new book and add to database

router.post('/', verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), bookController.createNewBook);

router.delete('/', bookController.deleteBook);

module.exports = router;