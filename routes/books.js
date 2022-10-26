const express = require('express');
const router = express.Router();
const path = require('path');
const bookController = require('../controllers/bookController');

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

router.post('/', bookController.createNewBook);


module.exports = router;