const Book = require('../model/Books');
const bcrypt = require('bcrypt');


const NewBook = async (req, res) => {

    const duplicate = await Book.findOne({title: title}).exec();

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
        newBook.title = title;
        newBook.author = author;
        newBook.summary = summary;
        newBook.status = "status";
        const result = await newBook.save();
    
    }catch(error){

        res.status(500)

    }
}

module.exports = {
    NewBook
}