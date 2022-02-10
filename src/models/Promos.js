const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  // Defino el modelo:
  sequelize.define("promos", {
    PromosId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
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
