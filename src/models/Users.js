const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  // Defino el modelo:
  sequelize.define('users', {
    id:{
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true, 
      defaultValue: DataTypes.UUIDV4
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    picture:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  
  }, {timestamps: false});
};
