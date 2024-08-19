const Card = require('../models/Card')

exports.createCard = async (cardData) => {
    const card = new Card(cardData)
    return await card.save()
}

exports.getCards = async () => {
    return await Card.find()
}

exports.getCardByTitle = async (title) => {
    console.log('title received', title)
    return Card.find({ title: { $regex: title, $options: 'i' } });
}