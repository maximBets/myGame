const { Theme, Flash } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Theme.bulkCreate(
      [
        {
          theme: 'Еда и напитки',
          Flashes: [
            {
              question: 'Какое мясо используется для блюда бефстроганов?',
              answer: 'Говядина',
              score: 100,
              theme_id: 1,
            },
            {
              question:
                'Какой напиток придумал итальянец Анджело Мори в 1884 году, чтобы утолить жажду своих футболистов?',
              answer: 'Лимонад',
              score: 200,
              theme_id: 1,
            },
            {
              question:
                'Как называется десерт, приготовленный из заварного крема и заварного теста ?',
              answer: 'Эклер',
              score: 300,
              theme_id: 1,
            },
            {
              question:
                'Какой растительный продукт используют для приготовления каширского чая?',
              answer: 'Иван-чай',
              score: 400,
              theme_id: 1,
            },
            {
              question:
                'Как называется национальное блюдо Греции, состоящее из филло теста, мясной начинки и бекмеза?',
              answer: 'Спанакопита',
              score: 500,
              theme_id: 1,
            },
          ],
        },
        {
          theme: 'История',
          Flashes: [
            {
              question: 'Кто был первым президентом России?',
              answer: 'Борис Ельцин',
              score: 100,
              theme_id: 2,
            },
            {
              question: 'В каком году состоялась Крещение Руси?',
              answer: '988',
              score: 200,
              theme_id: 2,
            },
            {
              question: 'В каком году началась Первая мировая война?',
              answer: '1917',
              score: 300,
              theme_id: 2,
            },
            {
              question: 'Кто был первым императором Рима?',
              answer: 'Август',
              score: 400,
              theme_id: 2,
            },
            {
              question:
                'Как назывался период государственной и культурной реформ в Китае, начавшийся в 1966 году?',
              answer: 'Культурная революция',
              score: 500,
              theme_id: 2,
            },
          ],
        },
        {
          theme: 'Спорт',
          Flashes: [
            {
              question:
                'Какая команда выиграла Чемпионат мира по футболу в 2018 году?',
              answer: 'Франция',
              score: 100,
              theme_id: 3,
            },
            {
              question:
                'Какой баскетболист считается лучшим игроком в истории НБА?',
              answer: 'Майкл Джордан',
              score: 200,
              theme_id: 3,
            },
            {
              question: 'Какой город является родиной фигурного катания?',
              answer: 'Санкт-Петербург',
              score: 300,
              theme_id: 3,
            },
            {
              question:
                'Какая команда выиграла Чемпионат мира по футболу в 2018 году?',
              answer: 'Франция',
              score: 400,
              theme_id: 3,
            },
            {
              question:
                'Какой спортсмен считается лучшим теннисистом в истории?',
              answer: 'Роджер Федерер',
              score: 500,
              theme_id: 3,
            },
          ],
        },
        {
          theme: 'Кино',
          Flashes: [
            {
              question:
                'Какой фильм считается самым прибыльным в истории кино?',
              answer: 'Аватар',
              score: 100,
              theme_id: 4,
            },
            {
              question: "Какой режиссер снял фильм 'Криминальное чтиво'?",
              answer: 'Квентин Тарантино',
              score: 200,
              theme_id: 4,
            },
            {
              question:
                'Какой фильм стал первым полнометражным анимационным фильмом студии Disney?',
              answer: 'Белоснежка и семь гномов',
              score: 300,
              theme_id: 4,
            },
            {
              question:
                "Какой актер сыграл главную роль в фильме 'Крестный отец'?",
              answer: 'Марлон Брандо',
              score: 400,
              theme_id: 4,
            },
            {
              question:
                'В каком фильме знаменитый актер Арнольд Шварценеггер сыграл роль Терминатора впервые?',
              answer: 'Терминатор',
              score: 500,
              theme_id: 4,
            },
          ],
        },
      ],
      {
        include: [Flash],
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await Theme.destroy({ truncate: { cascade: true } });
  },
};
