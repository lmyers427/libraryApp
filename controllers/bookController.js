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
    res.status(201).json(BookResult);
    }
   
    //If the user is searching by title
    else if(searchOption == "title")
    {

     //Fetch existing books in database associated with that title     
    const BookResult = await Book.find({title: search});

    //Json response with all the existing results for search criteria
    //Will change to display search criteria
    res.status(201).json(BookResult);

    }

    else
    {

        res.status(201).json({message: "No search results found for given criteria"});
    }
   
}

module.exports = {
    createNewBook,
    getBooks
}