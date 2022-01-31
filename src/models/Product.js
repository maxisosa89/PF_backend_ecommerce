const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  // Defino el modelo:
  sequelize.define("product", {
    ProductId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    qty:{
      type: DataTypes.INTEGER,
      allowNull:true,
      defaultValue:1
    },

    img: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
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

    additionalInformation: {
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
