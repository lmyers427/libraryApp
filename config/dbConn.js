const mongoose = require('mongoose');

const connectDB = async () => {
<<<<<<< HEAD
    try{

        await mongoose.connect(process.env.DATABASE_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true

        });

    }catch (err) {

=======
    try {
        // connect to mongoDB via DATABASE URI in .env file (local only)
        await mongoose.connect(process.env.DATABASE_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch (err) {
>>>>>>> e6f697662540a71333b88abf7286af3ea3f5d507
        console.error(err);
    }
}

module.exports = connectDB