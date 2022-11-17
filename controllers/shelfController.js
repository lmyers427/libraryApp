const Book = require('../model/Books');
const User = require('../model/Users');

const path = require('path');




const addBookToShelf = async (req, res) => {

    if(!req.session.user) return res.render(path.join(__dirname, '..', 'views', 'login'), {message: "Please Login Before Adding a Book"} );

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

    const testValue = duplicate.find(item => item._id === bookId);

    console.log(testValue);

    try{
        
    if(book) user.bookshelf.push(book);

    //const result = await user.save();

    //for testing

    //res.json(user + 'updated');


    }catch(error){

        res.status(500)
    }
    
}

module.exports = {
    addBookToShelf
}
