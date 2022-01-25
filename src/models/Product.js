const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // Defino el modelo:
  sequelize.define("product", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    aditionalInformation: {
      type: DataTypes.STRING,
    },
  });
};
