const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // Defino el modelo:
  sequelize.define("promos", {
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
