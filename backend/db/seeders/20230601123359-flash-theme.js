const { Theme, Flash } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Theme.bulkCreate(
      [
        {
          theme: 'Сериалы и фильмы',
          Flashes: [
            {
              question: 'Зима близко?',
              answer: 'Игра Престолов',
              score: 100,
              theme_id: 1,
            },
            {
              question:
                'Инвалид вселяется в огромное синее тело',
              answer: 'Аватар',
              score: 200,
              theme_id: 1,
            },
            {
              question:
                'Андрюха, у нас труп. Возможно криминал! по коням!',
              answer: 'улицы разбитых фонарей',
              score: 300,
              theme_id: 1,
            },
            {
              question:
                'Супер хакер с шизой',
              answer: 'Мистер робот',
              score: 400,
              theme_id: 1,
            },
            {
              question:
                'В каком фильме было ожерелье "Сердце океана"?',
              answer: 'Титаник',
              score: 500,
              theme_id: 1,
            },
          ],
        },
        {
          theme: 'Россия!!!',
          Flashes: [
            {
              question: 'Какая страна самая большая?',
              answer: 'Россия',
              score: 100,
              theme_id: 2,
            },
            {
              question: 'Многонациональная странна с перспективным будущем ',
              answer: 'Россия',
              score: 200,
              theme_id: 2,
            },
            {
              question: 'Самая лучшая страна?',
              answer: 'Россия',
              score: 300,
              theme_id: 2,
            },
            {
              question: 'Россия?',
              answer: 'Россия',
              score: 400,
              theme_id: 2,
            },
            {
              question:
                'Америка?',
              answer: 'Россия',
              score: 500,
              theme_id: 2,
            },
          ],
        },
        {
          theme: 'Игры',
          Flashes: [
            {
              question:
                'Благодаря какой игре появилась дота 2?',
              answer: 'warcraft',
              score: 100,
              theme_id: 3,
            },
            {
              question:
                '"You died"(назовите серию игр)',
              answer: 'souls',
              score: 200,
              theme_id: 3,
            },
            {
              question: 'Известная многим, стратегия, в которой фигурирует меч и магия',
              answer: 'Герои',
              score: 300,
              theme_id: 3,
            },
            {
              question:
                'Эта игра вышла в 2004 году, регулярно получает новые контент и является лидером в своём жанре',
              answer: 'WoW',
              score: 400,
              theme_id: 3,
            },
            {
              question:
                'Самая высоко оценённая игра в стиме?',
              answer: 'Portal 2',
              score: 500,
              theme_id: 3,
            },
          ],
        },
        {
          theme: 'Угадай блюдо по ингредиентам',
          Flashes: [
            {
              question:
                'яйцо',
              answer: 'яичница',
              score: 100,
              theme_id: 4,
            },
            {
              question: "свекла, капуста, лук, морковка и картошка, томатная паста, свежая зелень и специи по вкусу. Всё это варится на бульоне",
              answer: 'борщ',
              score: 200,
              theme_id: 4,
            },
            {
              question:
                'фарш смешать с варённым рисом и мелко нарезанной капустой, добавить специй. Лепим шарики, заливаем сметанно-томатным соусом с обжаренным луком и морковкой',
              answer: 'ленивые голубцы',
              score: 300,
              theme_id: 4,
            },
            {
              question:
                "пассеруем большое количество лука, вместе с оливками, солёнными огурцами, и томатной пастой и добавляем в наваристый бульён с копчёностями (по желанию можно добавить фасоль и картошку)",
              answer: 'солянка',
              score: 400,
              theme_id: 4,
            },
            {
              question:
                'обжариваем курицу вместе с имбирём, по ходу добавляем, лук, морковку, болгарский перец, специи, соевый соус вместе с соусом терияки и под конец посыпаем кунжутом',
              answer: 'удон',
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
