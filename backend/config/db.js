const mongoose = require('mongoose')
const config = require('./index.js')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://rishi:rishi6823@cluster0.lbibhkq.mongodb.net/future_skills_db', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('database connected');
    } catch (error) {
        console.log('failed to connect to database', error.message);
        process.exit(1)
    }
}

module.exports = connectDB

