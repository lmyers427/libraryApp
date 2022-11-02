const Book = require('../model/Books');
const bcrypt = require('bcrypt');

const createNewBook = async (req, res) => {

    const duplicate = await Book.findOne({title: req.body.title}).exec();

    if(duplicate) return res.render('../views/books.ejs', {message: 'Book Already Exists'});


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
        //res.status(201).json(newBook);
        const result = await newBook.save();
    


        
        console.log(result); // testing log to verify book created correctly

        res.render('../views/books.ejs', {message: 'Book Successfully added to the database'});
    
    }catch(error){

        res.status(500)

    }
}

const getBooks = async (req, res) => {

    //Collect query string from HTML form 
    const {search, searchOption} = req.query; //may change depending on HTML
    

    //If nothing was included in the search criteria
    if(!search) return res.status(400).json({'message':'Nothing in Search'});
    

    //if user is searching by Author
    if(searchOption == "author") 
    {
    //Fetch existing books in database associated with that author 
    const BookResult = await Book.find({author: search });


    //Json response with all the existing results for search criteria
    //Will change to display search criteria
   // res.status(201).json(BookResult);
   res.render('../views/search.ejs', { BookResults: BookResult });
    }
   
    //If the user is searching by title
    else if(searchOption == "title")
    {

     //Fetch existing books in database associated with that title     
    const BookResult = await Book.find({title: search});

    //Json response with all the existing results for search criteria
    //Will change to display search criteria
    //res.status(201).json(BookResult);
    
    //testing render display
    res.render('../views/search.ejs', { BookResults: BookResult });

       
    
    }

    else
    {

        res.status(201).json({message: "No search results found for given criteria"});
    }
}

const deleteBook = async (req, res) => {
<<<<<<< HEAD
=======
    console.log(req);
    if (!req?.body?.title) return res.status(400).json({ 'message': 'Book title required.' });
>>>>>>> 1fbd52d506f6d4e804cfb5c67382579848c2fb26

    
    if (!req?.body?.title2) return res.status(400).json({ 'message': 'Book title required.' });

    const bookTitle = req.body.title2;

    const book = await Book.findOne({ title: bookTitle }).exec();
    if (!book) {
        return res.status(204).json({ "message": `No book found matching title ${req.body.title}.` });
    }
    const result = await book.deleteOne(); 
    res.json(result);
    
    // for testing
    console.log(book + 'deleted')
}

module.exports = {
    createNewBook,
    getBooks,
    deleteBook
}