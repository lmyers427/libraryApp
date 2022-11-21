const Book = require('../model/Books');
const User = require('../model/Users');
const path = require('path');



//adds book to user bookshelf
const addBookToShelf = async (req, res) => {

    //if user is not logged in return user to login page
    if(!req.session.user) return res.render(path.join(__dirname, '..', 'views', 'login'), {message: "Please Login"} );

    //grab bookId of select book from HTML form
    const {bookId, bookResult } = req.body;

    const bookArr = bookResult.split(",");

    let newBookArr = [];

   bookArr.forEach((item) => {

    newBookArr.push(`ObjectId(${item})`);
   })

   console.log(newBookArr);

    //initialize an instance of the book from the Book Database
    const book = await Book.findById(bookId).exec();
    if (!book) {
        return res.status(204).json({ "message": `No book found matching id ${bookId}.` });
    }


    const usernm = req.session.user;

    //create an instance of the user to add the new book title to bookshelf
    const user = await User.findOne({username: usernm}).exec();

    if (!user) {
        return res.status(204).json({ "message": `No user found matching username ${usernm}.` });
    }

    
    let testValue = false;
    
    //Find if book already exists users bookShelf
    user.bookshelf.forEach((item) => {

        //loop through items to check each value already in user shelf
        for(let key in item){
            //if the value is found
            if(item[key].toString() == bookId){
                //set testValue to true
                testValue = true;
            }
        }
        
    });

    const bookResults = await Book.find({"_id" : {"$in" : newBookArr}});

    
    //if the testValue is true then the book already exists in the users bookshelf
    if(testValue) return res.render('../views/search.ejs', {message:`Book already exists on ${req.session.user}'s Shelf`});

    try{
    //if the book exists in the Book database add the book
    //to the user shelf    
    if(book) user.bookshelf.push(book);

    const result = await user.save();

   
    return res.render('../views/search.ejs', {message:`Book Successfully Added to ${req.session.user}'s Shelf`})


    }catch(error){

        res.status(500)
    }
    
}

const getUserShelf = async (req, res) => {


    if(!req.session.user) return res.render(path.join(__dirname, '..', 'views', 'login'), {message: "Please Login"} );


    const usernm = req.session.user;


    const user = await User.findOne({username: usernm}).exec();

    if (!user) {
        return res.status(204).json({ "message": `No user found matching username ${usernm}.` });
    }


    const userShelf = user.bookshelf;

    let idArr = [];

    userShelf.forEach((item) => {

        for(let key in item){
            if(key == '_id'){

                idArr.push(item[key]);
            }
        }
        
    });

    console.log(idArr);
   const bookResult = await Book.find({"_id" : {"$in" : idArr}});


    res.render('../views/userShelf.ejs', {user: req.session.user, message: " ", BookResults: bookResult});



}

const removeFromShelf = async (req, res) => {

    if(!req.session.user) return res.render(path.join(__dirname, '..', 'views', 'login'), {message: "Please Login"} );

    const usernm = req.session.user;

    let bookId = req.body.bookId;

    const user = await User.findOne({username: usernm}).exec();

    if (!user) {
        return res.status(204).json({ "message": `No user found matching username ${usernm}.` });
    }


        let testValue = false;
        
        let i = 0;
        let index = 0;
        //Find whether book exists user's bookShelf
        user.bookshelf.forEach((item) => {

            
            for(let key in item){
                if(item[key].toString() == bookId){
                    
                    testValue = true;
                    index = i;
                }
            }
            i++

            
        });
        //if the testValue is true then the book already exists in the users bookshelf
        if(!testValue) return res.render('../views/search.ejs', {message:`Book does not exist on ${req.session.user}'s shelf`});
    

    try{
        
        
        //removes book from 
        user.bookshelf.splice(index,1);

    
        const result = await user.save();




//reload shelf without book listed?
        
    const userShelf = user.bookshelf;

    let idArr = [];

    userShelf.forEach((item) => {

        for(let key in item){
            if(key == '_id'){

                idArr.push(item[key]);
            }
        }
        
    });


    const bookResult = await Book.find({"_id" : {"$in" : idArr}});


    return res.render('../views/userShelf.ejs', {user: req.session.user, message: "Book Successfully Removed from Shelf ", BookResults: bookResult});
       
        }catch(error){
    
            res.status(500)
        }


}

module.exports = {
    addBookToShelf,
    getUserShelf,
    removeFromShelf
}
