const Book = require('../model/Books');
const User = require('../model/Users');




const addBookToShelf = async (req, res) => {
    if (!req.session.user) return res.status(400).json({ 'message': 'Login Required.' });

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


    try{
        
    if(book) user.bookshelf.push(book);

    const result = await user.save();

    //for testing

    res.json(user + 'updated');


    }catch(error){

        res.status(500)
    }
    
}

module.exports = {
    addBookToShelf
}
