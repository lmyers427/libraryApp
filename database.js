require('dotenv').config();

const mongoose = require('mongoose');

const connectDB = require('./config/dbConn');

//Connect to MongoDB
connectDB();


//Listen only if MongoDB connects
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    //might need to adjust this depending on how server is built
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
