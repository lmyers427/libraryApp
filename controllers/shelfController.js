const Book = require('../model/Books');
const User = require('../model/Users');
const path = require('path');



const addBookToShelf = async (req, res) => {

    if(!req.session.user) return res.render(path.join(__dirname, '..', 'views', 'login'), {message: "Please Login"} );

    const {bookId} = req.body;

    const book = await Book.findById(bookId).exec();
    if (!book) {
        return res.status(204).json({ "message": `No book found matching id ${bookId}.` });
    }


    const usernm = req.session.user;


    const user = await User.findOne({username: usernm}).exec();

    if (!user) {
        return res.status(204).json({ "message": `No user found matching username ${usernm}.` });
    }

    //console.log(user.bookshelf[bookId]);

    const duplicate = user.bookshelf;

    let testValue = false;
    
    //Find whether book already exists users bookShelf
    duplicate.forEach((item) => {

        for(let key in item){
            if(item[key].toString() == bookId){
                
                testValue = true;
            }
        }
        
    });
    //if the testValue is true then the book already exists in the users bookshelf
    if(testValue) return res.render('../views/search.ejs', {message:`Book already exists on ${req.session.user}'s Shelf`});

    try{
        
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
        
        
        
        user.bookshelf.splice(index,1);

    
        const result = await user.save();
    
       
        return res.render('../views/userShelf.ejs', {user:req.session.user, message:`Book Successfully Removed from Shelf`})
    
    
        }catch(error){
    
            res.status(500)
        }


}

module.exports = {
    addBookToShelf,
    getUserShelf,
    removeFromShelf
}
