const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // Defino el modelo:
  sequelize.define("categories", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue:DataTypes.UUIDV4
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
