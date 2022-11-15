const Support = require('../model/support');
const NewTicket = async (req, res) => {

    const {recomendation, technicalDifficulty} = req.body; //may change depending on HTML
    if(!recomendation || !technicalDifficulty) return res.status(400).json({'message':'Please enter a recommendation or Technical Difficulty'});

    const duplicate = await Support.findOne({recomendation: recomendation}).exec();

    if(duplicate) return res.render('../views/home.ejs', { message: req.session.message = 'Book already Recomended' });

    try{

        const newTicket = new Ticket();
        newTicket.recomendation = recomendation;
        newTicket.technicalDifficulty = technicalDifficulty;
        const result = await newTicket.save();

        res.render('../views/home.ejs', {message: req.session.message = 'Ticket successfully created'});
    
    }catch(error){
        res.status(500).render('../views/home.ejs', {message: req.session.message = 'Failed to create ticket'});
    }
}

module.exports = {
    NewTicket
}