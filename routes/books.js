const express = require('express');
const router = express.Router();
const path = require('path');
const bookController = require('../controllers/bookController');
const ROLES_LIST = require('../config/roles_list');
const verifyRoles = require('../middleware/verifyRoles');
/*****
 * The following variables are 
 * implemented for fetching image files
 * and storing them into our public/uploads/bookCover path
*******/
const multer = require('multer');
const Book = require('../model/Books');
const uploadPath = path.join('public', Book.coverImageBasePath);
const imageMimeTypes = ['image/jpeg', 'image/png', 'image/gif' ];
const upload = multer({
    dest: uploadPath,
    fileFilter: (req, file, callback) => {
        callback(null, imageMimeTypes.includes(file.mimetype))
    }
});





router.get('/', (req, res) => {
    
    res.render(path.join(__dirname, '..', 'views', 'books'), {message: ' '}); //with ejs updated to render
    
});

//verifies roles before allowing user to create a new book and add to database

//upload.single is a built-in middleware function of multer package create that file and upload
//the image to our server and store it in the correct folder (in our case... public/uploads/bookCovers)
//Add req.file variable and sends it to our bookController
router.post('/add', verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), upload.single('cover'), bookController.createNewBook);


//verify roles before allowing user to delete book from database. 
router.post('/delete', verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), bookController.deleteBook);

module.exports = router;