const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // Defino el modelo:
  sequelize.define('product', {
    
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

});
};