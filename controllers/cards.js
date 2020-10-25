const Card = require('../models/card');

const getCards = async (req, res) => {
  try {
    const cards = await Card.find({});
    res.send(cards);
  } catch (err) {
    res.status(500).send({ message: `Произошла ошибка: ${err}` });
  }
};

const createCard = async (req, res) => {
  try {
    const { name, link } = req.body;
    const owner = req.user._id;
    const card = await Card.create({
      owner, name, link,
    });
    res.send(card);
  } catch (err) {
    res.status(500).send({ message: `Произошла ошибка: ${err}` });
  }
};

const deleteCard = async (req, res) => {
  try {
    const card = await Card.findByIdAndRemove(req.params.id);
    res.send(card);
  } catch (err) {
    res.status(500).send({ message: `Произошла ошибка: ${err}` });
  }
};

const likeCard = async (req, res) => {
  try {
    const card = await Card.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { likes: req.user._id } },
      { new: true },
    );
    res.send(card);
  } catch (err) {
    res.status(500).send({ message: `Произошла ошибка: ${err}` });
  }
};

const disLikeCard = async (req, res) => {
  try {
    const card = await Card.findByIdAndUpdate(
      req.params.id,
      { $pull: { likes: req.user._id } },
      { new: true },
    );
    res.send(card);
  } catch (err) {
    res.status(500).send({ message: `Произошла ошибка: ${err}` });
  }
};

module.exports = {
  getCards, createCard, deleteCard, likeCard, disLikeCard,
};
