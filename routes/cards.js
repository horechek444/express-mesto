const router = require('express').Router();
const { getCards } = require('../controllers/getCardsInfo.js');

router.get('/cards', getCards);

module.exports = router;
