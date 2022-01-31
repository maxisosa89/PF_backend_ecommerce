const { DataTypes, UUIDV4 } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "cart",
    {
      CartId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
      },
      user:{
        type:DataTypes.STRING,
        allowNull:true
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      productCart: {
        type: DataTypes.JSON(),
        allowNull: false,
        defaultValue:[]
      },
      status:{
        type:DataTypes.ENUM("created","paid","dispatched"),
        defaultValue:"created",
        allowNull:false
      }
    },
    { timestamps: false }
  );
};
