const cardService = require('../services/CardServices')

exports.createCard = async (request, response) => {
    try {
        console.log('body recieved = ', request.body)
        const card = await cardService.createCard(request.body)
        response.status(201).json(card)
    } catch (error) {
        response.status(500).json({ error: error.message })
    }
}

exports.getCards = async (request, response) => {
    console.log('requrest received');
    try {
        const cards = await cardService.getCards()
        response.status(200).json({ cards: cards })
    } catch (error) {
        response.status(500).json({ error: error.message })
    }
}

exports.getCardByTitle = async (request, response) => {
    try {
        const title = request.params.title
        const cards = await cardService.getCardByTitle(title)
        if (cards == null) {
            response.status(200).json({ message: 'no card found with given title' })
        } else {
            response.status(200).json({ cards: cards })
        }

    } catch (error) {
        response.status(500).json({ error: error.message })
    }
}