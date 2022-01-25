const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // Defino el modelo:
  sequelize.define("product", {
    idProduct:{
      type: DataTypes.UUID
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stock:{
      type:DataTypes.INTEGER
    },
    soldQty:{
      type:DataTypes.INTEGER
    },
    img: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    info: {
      type: DataTypes.JSON({
        color:DataTypes.STRING,
        manufacturer:DataTypes.STRING,
        cloth: DataTypes.STRING,
      })
    },
    description: {
      type: DataTypes.STRING,
    },
    size:{
      type:DataTypes.ENUM("XS","S","M","L","XL","XXL")
    }
  });
};
