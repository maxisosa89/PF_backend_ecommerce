const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  // Defino el modelo:
  sequelize.define("cart",
    {
      CartId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
      },
      
      user: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      
      productCart: {
        type: DataTypes.JSON(),
        allowNull: false,
        defaultValue: [],
      },
      
      status: {
        type: DataTypes.ENUM("open", "paid", "dispatched", "delivered"),
        defaultValue: "open",
        allowNull: false,
      },
      
      userInfo: {
        type: DataTypes.JSON(),
        allowNull: true,
      },
    
    },{ timestamps: false }
  );
};
