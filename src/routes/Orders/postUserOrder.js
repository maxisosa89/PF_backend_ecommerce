const { Cart, Users, Product } = require("../../db");
// const Stripe = require("stripe");
// require('dotenv').config();
// const { STRIPE_CONN } = process.env;
// const stripe = new Stripe(STRIPE_CONN);


const postUserOrder = async (req, res, next) => {
  const {CartId} = req.params;
  const {infoBuy,infoUser}=req.body;
  try {
    //-----------------------------------------------------------------------------
    // busco el carrito a modificar
    let actualCart = Cart.findOne({where:{CartId}})
    //creo la info para actualizar el carrito
    let updateInfo = {
      //añado posibles cambios en los stocks
      productCart:infoBuy.productCart,
      // le cambio el estado a "paid"
      state: "paid",
      //le añado la informacion del usuario (direccion, pais, etc etc)
      userInfo:infoUser
    }
    //actializo el carrito con las unidades compradas y estado nuevo
    actualCart.update(updateInfo)
    //-----------------------------------------------------------------------------
    //gaurdo los productos comprados
    const buyProducts = infoBuy.productCart
    // hago un for para iterar sobre cada producto
    for (let i = 0; i < newStock.length; i++) {
      let id = buyProducts[i].ProductId
      let buyUnits = buyProducts[i].stock
      //guardo el producto que quiero actualizar
      let updatedProduct = Product.findOne({where:{id}})
      //le resto lo que compre al stock del producto
      let updateStock = { 
        stock: {
          xs:Number(updatedProduct.stock.xs) - Number(buyUnits.xs),
          s:Number(updatedProduct.stock.s) - Number(buyUnits.s),
          m:Number(updatedProduct.stock.m) - Number(buyUnits.m),
          l:Number(updatedProduct.stock.l) - Number(buyUnits.l),
          xl:Number(updatedProduct.stock.xl) - Number(buyUnits.xxl),
        }
      }
      //actualizo el producto con el stock restado
      updatedProduct.update(updateStock)
    }
    

    // le genero un carrito vacio al user
  } catch (error) {
    next(error)
  }
};


module.exports = {
  postUserOrder
};
