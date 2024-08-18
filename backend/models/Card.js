const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid')

const cardSchema = new mongoose.Schema({
    cardId: {
        type: String,
        unique: true,
        default: uuidv4
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
},
    {
        collection: 'cards'
    }
)

const Card = mongoose.model('Card', cardSchema)
module.exports = Card