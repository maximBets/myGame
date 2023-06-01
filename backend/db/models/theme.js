const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    static associate({ Flash }) {
      this.hasMany(Flash, { foreignKey: 'theme_id' });
    }
  }
  Theme.init(
    {
      theme: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Theme',
    }
  );
  return Theme;
};
