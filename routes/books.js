// const express = require('express');
// const router = express.Router();
// const bookController = require('../controllers/bookController');
// // const rolesList = require('../config/roles_list');
// // const verifyRoles = require('../middleware/verifyRoles');

// router.route('/')
//     .post(bookController.createNewBook)
//     //.get(bookController.getAllBooks)
//     //.post(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), bookController.createNewBook)
//     //.put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), bookController.updateBook)
//     //.delete(verifyRoles(ROLES_LIST.Admin), bookController.deleteBook);


// module.exports = router;

/*Adjusting route to test Controller
*/
const express = require('express');
const router = express.Router();
const path = require('path');
const bookController = require('../controllers/bookController');


//this route will just test out if we can call and save the book addition
router.get('/', (req, res) => {
    
    res.render(path.join(__dirname, '..', 'views', 'books')); //ejs updated to render
});

//Register new user
router.post('/', bookController.createNewBook);


module.exports = router;