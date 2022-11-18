const Support = require('../model/Support');


const NewTicket = async (req, res) => {

    const {recommend, tech} = req.body; //may change depending on HTML
    
    //console.log(req.body);
    
    if(!recommend || !tech) return res.status(400).json({'message':'Please enter a recommendation or Technical Difficulty'});

    const duplicate = await Support.findOne({recomendation: recommend}).exec();

    if(duplicate) return res.render('../views/home.ejs', { message: req.session.message = 'Book already Recomended' });

    try{

        const newTicket = new Support();
        newTicket.Recommendation = recommend;
        newTicket.TechnicalDifficulty = tech;
        const result = await newTicket.save();

        res.render('../views/home.ejs', {user: req.session.user, message: req.session.message = 'Ticket successfully created'});
    
    }catch(error){
        res.status(500).render('../views/home.ejs', {user: req.session.user, message: req.session.message = 'Failed to create ticket'});
    }
}

module.exports = {
    NewTicket
}