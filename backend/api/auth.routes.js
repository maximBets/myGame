const authRoutes = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

// * регистрация
authRoutes.post('/register', async (req, res) => {
  try {
    const { name, password, password2 } = req.body;

    // * проверка что все поля заполнены
    if (!(name && password2 && password)) {
      res
        .status(402)
        .json({ success: false, message: 'Заполните пожайлуста все поля' });
      return;
    }
    // // * проверка совпадения паролей
    if (password !== password2) {
      res.status(403).json({ success: false, message: 'Пароли не совпадают' });
      return;
    }

    // * проверка есть ли такой user в БД
    const extenseUser = await User.findOne({ where: { name } });
    if (extenseUser) {
      res.status(409).json({
        success: false,
        message: 'Пользователь с таким именем уже существует',
      });
      return;
    }

    // * создаем пользователя в БД
    const user = await User.create({
      name,
      password: await bcrypt.hash(password, 10),
    });

    // * авторизация - запоминаем пользователя
    // * req.session - хранилище сессии, которое уникально для каждого браузера

    req.session.userId = user.id;

    res
      .status(200)
      .json({ name: user.name, id: user.id, password: user.password });
  } catch (error) {
    console.error(error);

    //* возвращаем клиенту ошибку (возможно легла БД или переполнился диск)

    res.status(500).json({
      success: false,
      message: 'возможно легла БД или переполнился диск',
    });
  }
});
// * авторизация
authRoutes.post('/login', async (req, res) => {
  try {
    const { name, password } = req.body;

    if (!(name && password)) {
      res
        .status(402)
        .json({ success: false, message: 'Заполните пожайлуста все поля' });
      return;
    }

    const user = await User.findOne({ where: { name } });
    if (!user || user.name !== name) {
      res.status(401).json({ success: false, message: 'Неверное имя' });
      return;
    }

    // * валидация пароля
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
      res.status(401).json({ success: false, message: 'Неверный пароль' });
      return;
    }

    // * авторизация - запоминаем пользователя
    // * req.session - хранилище сессии, которое уникально для каждого браузера

    req.session.userId = user.id;
    res
      .status(200)
      .json({ name: user.name, id: user.id, password: user.password });
  } catch (error) {
    console.error(error);

    // * возвращаем клиенту ошибку (возможно легла БД или переполнился диск)

    res.status(500).json({
      success: false,
      message: 'Возможно легла БД или переполнился диск',
    });
  }
});

// * очишаем куки можно посмотреть в консоли браузера Application
authRoutes.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('user_sid');
    res.json({ success: true, message: 'вы вышли из акаунта' });
    // res.redirect('/');
  });
});

module.exports = authRoutes;
