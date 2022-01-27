const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // Defino el modelo:
    sequelize.define('order', {
      idOrder: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
      },
      
      address:{
        type:DataTypes.JSON(
          {
            country: {type:DataTypes.STRING},
            city: {type:DataTypes.STRING},
            street: {type:DataTypes.STRING},
            postalCode: {type:DataTypes.STRING}
          }
        ),
        allowNull: false,
        defaultValue: {
          country:'',
          city:'',
          street:'',
          postalCode:''
        }
      },

      totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },

      buyStatus: {
        type: DataTypes.ENUM("processing", "successful", "rejected"),
        allowNull: false,
      },
        
      shippingStatus:{
        type: DataTypes.ENUM("processing", "sent", "recieved"),
        defaultValue: "processing"
      }
    },
    {
      createdAt: 'creationDate',
      updatedAt: 'confirmationDate',
    }
  );
};