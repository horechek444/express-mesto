const User = require('../models/user');

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(500).send({ message: `Произошла ошибка: ${err}` });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params._id });
    if (!user) {
      res.status(404).send({ message: 'Нет пользователя с таким id' });
    }
    res.send(user);
  } catch (err) {
    res.status(500).send({ message: `Произошла ошибка: ${err}` });
  }
};

const createUser = async (req, res) => {
  try {
    const id = User.countDocuments();
    const { name, about, avatar } = req.body;
    const user = await User.create({
      id, name, about, avatar,
    });
    res.send(user);
  } catch (err) {
    res.status(500).send({ message: `Произошла ошибка: ${err}` });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      { id: req.user._id }, {}, { new: true, runValidators: true, upsert: true },
    );
    res.send(user);
  } catch (err) {
    res.status(500).send({ message: `Произошла ошибка: ${err}` });
  }
};

const updateAvatarUser = async (req, res) => {
  try {
    const avatar = await User.findByIdAndUpdate(
      { id: req.user._id }, {}, { new: true, runValidators: true, upsert: true },
    );
    res.send(avatar);
  } catch (err) {
    res.status(500).send({ message: `Произошла ошибка: ${err}` });
  }
};

module.exports = {
  getUsers, getUser, createUser, updateUser, updateAvatarUser,
};
