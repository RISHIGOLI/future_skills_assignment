const express = require('express')
const cardController = require('../controllers/CardController')

const router = express.Router()

router.post('/', cardController.createCard)
router.get('/', cardController.getCards)
router.get('/:title', cardController.getCardByTitle)

module.exports = router

