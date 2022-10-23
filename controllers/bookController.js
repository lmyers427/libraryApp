const Book = require('../model/Books');
const bcrypt = require('bcrypt');

const createNewBook = async (req, res) => {

    const duplicate = await Book.findOne({title: req.body.title}).exec();

    if(duplicate) return { message: req.session.message = 'Book Already Exists' };

    try{

        // //create book
        // const result = await Book.create({
        //     "title": title,
        //     "author": author,
        //     "summary": summary,
        //     "status": status

        // });
        //test out before posting to Database :)

        const newBook = new Book();       
        newBook.title = req.body.title;
        newBook.author = req.body.author;
        newBook.summary = req.body.summary;
       // newBook.status = req.body.status;

        //console.log(newBook);
        const result = await newBook.save();

        
        res.render('../views/home.ejs', {message: req.session.message = 'Book Successfully Added'});
    
        
    }catch(error){

        res.status(500)

    }
}

const getBook = async (req, res) => {

    
}

module.exports = {
    createNewBook,
    getBook
}