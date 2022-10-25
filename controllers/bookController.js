const Book = require('../model/Books');
const bcrypt = require('bcrypt');

const createNewBook = async (req, res) => {

    const duplicate = await Book.findOne({title: req.body.title}).exec();

    if(duplicate) return res.render('../views/books.ejs', {message: req.session.message = 'Book Already Exists'});

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
        newBook.status = req.body.status;
       res.status(201).json(newBook);
       const result = await newBook.save();
       
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