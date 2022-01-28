const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  // Defino el modelo:
  sequelize.define("categories", {
    CategoriesId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });
};
