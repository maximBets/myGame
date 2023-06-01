const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Flash extends Model {
    static associate({ Theme }) {
      this.belongsTo(Theme, { foreignKey: 'theme_id' });
    }
  }
  Flash.init(
    {
      question: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      answer: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      score: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      theme_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Themes',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Flash',
    }
  );
  return Flash;
};
