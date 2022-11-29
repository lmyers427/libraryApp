const Support = require('../model/Support');
const User = require('../model/Users');


const NewTicket = async (req, res) => {

    const {recommend, tech} = req.body; //may change depending on HTML
    
    const user = await User.find({username: req.session.user}).exec();

    
    
    if(!recommend && !tech) return res.status(400).json({'message':'Please enter a recommendation or Technical Difficulty'});

    try{

        const newTicket = new Support();
        if(recommend) newTicket.Recommendation = recommend;
        if(tech) newTicket.TechnicalDifficulty = tech;
        if(user) newTicket.userSubmitted = req.session.user;
        const result = await newTicket.save();

        res.render('../views/home.ejs', {user: req.session.user, message: req.session.message = 'Ticket successfully created'});
    
    }catch(error){
        res.status(500).render('../views/home.ejs', {user: req.session.user, message: req.session.message = 'Failed to create ticket'});
    }
}

module.exports = {
    NewTicket
}