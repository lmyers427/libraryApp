const express = require('express');
const router = express.Router();
const employeesController = require('../controllers/bookController');
// const rolesList = require('../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .get(employeesController.getAllBooks)
    .post(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), booksController.createNewBook)
    .put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), booksController.updateBook)
    .delete(verifyRoles(ROLES_LIST.Admin), booksController.deleteBook);

router.route('/:id')
    .get(booksController.getBook);

router.route('/:title')
    .get(booksController.getBook);

module.exports = router;