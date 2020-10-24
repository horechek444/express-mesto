const router = require('express').Router();
const {
  getCards, createCard, deleteCard, likeCard, disLikeCard,
} = require('../controllers/cards.js');

router.get('/', getCards);
router.post('/', createCard);
router.delete('/:cardsId', deleteCard);
router.put('/:cardsId/likes', likeCard);
router.delete('/:cardsId/likes', disLikeCard);

module.exports = router;
