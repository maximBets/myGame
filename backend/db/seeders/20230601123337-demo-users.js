/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Anya',
          password: await bcrypt.hash('1234', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Papa',
          password: await bcrypt.hash('1234', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
