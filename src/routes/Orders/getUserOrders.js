// const { Details, Users, Cart, Product } = require("../../db");


// const getUserOrders = async (req, res, next) => {
  
//   const { UsersId, CartId = null } = req.params;
  
//   try {
    
//     let user = await Users.findOne(
//       {
//         where: { UsersId: UsersId },
//         attributes: { exclude: ["images", "attributes", "password", "phone", "type", "email", "image", "address"] }
//       }
//     );
    
//     if(!CartId) {
//       // Si no hay id de orden, entonces se prenstan todas las órdenes de un usuario
//       let orders = await Cart.findAll(
//         {
//           where: { UsersId },
//           attributes: { exclude: ["confirmationDate", "UsersId"] },
//           include: { model: Product, attributes:["ProductId", "name", "img"] },
//         }
//       );

//       orders = orders.map((el) => {
//         let { products, ...otherData } = el.toJSON();
        
//         products = products.map((prod) => {
//           let { details,...prodData }= prod;
//           return { 
//             ...prodData, 
//             amount: details.amount, 
//             price: details.price 
//           };
//         });
        
//         return { ...otherData, products };
//       })

//       res.status(200).json({user, orders})
    
//     } else {
//       // En caso de tener un id de Orden, se muestra tanto la orden como los productos asociados a esa orden
//       let order = await Cart.findByPk(CartId, { attributes: {exclude: ["confirmationDate"]} });
      
//       let orderProducts = await Details.findAll(
//         {
//           where: { CartId },
//         }
//       )
      
//       let products = await Product.findAll(
//         {
//           where: { ProductId: orderProducts.map((el) => el.toJSON().ProductId) },
//           attributes: ["name", "ProductId", "img"]
//         }
//       )
      
//       orderProducts = orderProducts.map((el) => {
//         let { ProductId, CartId, ...useFullData } = el.toJSON();
//         let product = products.find((element) => element.ProductId === el.ProductId).toJSON();
        
//         return { 
//           ...useFullData, 
//           name: product.name, 
//           thumbnail: product.img, 
//           ProductId: product.ProductId 
//         };
      
//       });
      
//       res.status(200).json({user, order, orderProducts})
//     }

//   } catch (error) {
//     next(error)
//   }
// };


// module.exports= {
//   getUserOrders
// }