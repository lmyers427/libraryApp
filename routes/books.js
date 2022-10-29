const express = require('express');
const router = express.Router();
const path = require('path');
const bookController = require('../controllers/bookController');
const ROLES_LIST = require('../config/roles_list');
const verifyRoles = require('../middleware/verifyRoles');



//router.route('/')
   // .post(bookController.createNewBook)
    //.get(bookController.getAllBooks)
    //.post(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), bookController.createNewBook)
    //.put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), bookController.updateBook)
    //.delete(verifyRoles(ROLES_LIST.Admin), bookController.deleteBook);


router.get('/', (req, res) => {
    let message = req.session.message;
    res.render(path.join(__dirname, '..', 'views', 'books'), {message: message}); //with ejs updated to render
    
});

//verifies roles before allowing user to create a new book and add to database

router.post('/', verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), bookController.createNewBook);


module.exports = router;