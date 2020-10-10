const router = require('express').Router();
const { getUsers, getUser } = require('../controllers/getUsersInfo.js');

router.get('/users', getUsers);
router.get('/users/:id', getUser);

module.exports = router;
