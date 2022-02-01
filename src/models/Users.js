const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  // Defino el modelo:
  sequelize.define('users', {
   
    UsersId:{
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
      allowNull: true,
    },
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    address: {
      type: DataTypes.STRING
    },

    cp: {
      type: DataTypes.STRING
    },

    state: {
      type: DataTypes.STRING
    },

    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },

    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },

    country: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Colombia"
    },

  }, {timestamps: false});
};
