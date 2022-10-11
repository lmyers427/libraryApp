require('dotenv').config();
const express = require('express'); 
const path = require('path');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const PORT = process.env.PORT || 3500; 
const bodyParser = require('body-parser');


// connect to mongo database  
connectDB();

// Makes it easier to handle urlencoded form data
app.use(bodyParser.urlencoded({limit: '10mb', extended: false }));


//serve static files for css designs
app.use('/', express.static(path.join(__dirname, '/styles')));


//routes (root folder is currently the login route)
app.use('/', require('./routes/root'));
app.use('/home', require('./routes/home'));


app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});


//Listen only if MongoDB connects
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    //might need to adjust this depending on how server is built
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
