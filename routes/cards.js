const router = require('express').Router();
const { getCards, likeCard, disLikeCard } = require('../controllers/cards.js');

router.get('/', getCards);
router.put('/:cardsId/likes', likeCard);
router.delete('/:cardsId/likes', disLikeCard);

module.exports = router;
