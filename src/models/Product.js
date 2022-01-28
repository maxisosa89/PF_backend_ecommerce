const { DataTypes } = require('sequelize');

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
    ranking: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.STRING,
    },

    aditionalInformation: {
      type: DataTypes.JSON(
        {
          manufacturer: DataTypes.STRING,
          material: DataTypes.STRING,
          occasion: DataTypes.STRING,
          fit: DataTypes.STRING,
          lining_material: DataTypes.STRING,
        }
      ),
    },

    stock: {
      type: DataTypes.JSON(
        {
          xs: DataTypes.INTEGER,
          s: DataTypes.INTEGER,
          m: DataTypes.INTEGER,
          l: DataTypes.INTEGER,
          xl: DataTypes.INTEGER,
          xxl: DataTypes.INTEGER,
        }
      ),
    },
  
  });
};
