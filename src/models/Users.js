const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // Defino el modelo:
  sequelize.define('users', {
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  
  });
};
