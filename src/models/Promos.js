const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // Defino el modelo:
  sequelize.define("promos", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
    },
    resume: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
};
