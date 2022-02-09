const {
  Cart,
  Users,
  Product
} = require("../../db");
// const Stripe = require("stripe");
// require('dotenv').config();
// const { STRIPE_CONN } = process.env;
// const stripe = new Stripe(STRIPE_CONN);


const postUserOrder = async (req, res, next) => {
  const {
    CartId
  } = req.params;
  const {
    infoBuy,
    infoUser
  } = req.body;
  try {
    // console.log(infoBuy,"------",infoUser)
    // if (!infoUser) {
    //   return console.log("no llega la informacion del usuarioo")
    // }
    //-----------------------------------------------------------------------------
    // busco el carrito a modificar
    let actualCart = await Cart.findOne({
      where: {
        CartId
      }
    })
    // console.log(actualCart)
    //creo la info para actualizar el carrito
    let updateInfo = {
      //añado posibles cambios en los stocks
      productCart: infoBuy.productCart,
      // le cambio el estado a "paid"
      status: "paid",
      //le añado la informacion del usuario (direccion, pais, etc etc)
      userInfo: infoUser
    }
    // console.log("asdsadsaadsa", updateInfo)
    //actializo el carrito con las unidades compradas y estado nuevo
    await actualCart.update(updateInfo)
let email = infoUser.email
    let validate = await Users.findOne({
      where: {
        email
      },
      include: {
        model: Cart,
        attributes: ['CartId'],
        through: {
          attributes: []
        },
      }
    })

   console.log(infoUser.email)
      let created = await Cart.create({
          user: infoUser.email
        
      })
      validate.addCart(created)
    
    

    //-----------------------------------------------------------------------------
    // gaurdo los productos comprados
    const buyProducts = infoBuy.productCart
    
    // hago un for para iterar sobre cada producto
    for (let i = 0; i < buyProducts.length; i++) {
      let id = buyProducts[i].ProductId
      let buyUnits = buyProducts[i].stock
      console.log(buyUnits)
      // guardo el producto que quiero actualizar
      let updatedProduct = await Product.findOne({where:{ProductId:id}})
      // console.log(updatedProduct)
      // le resto lo que compre al stock del producto
      console.log(updatedProduct.stock)
      let updateStock = { 
        stock: {
          xs:Number(updatedProduct.stock.xs) - Number(buyUnits.xs),
          s:Number(updatedProduct.stock.s) - Number(buyUnits.s),
          m:Number(updatedProduct.stock.m) - Number(buyUnits.m),
          l:Number(updatedProduct.stock.l) - Number(buyUnits.l),
          xl:Number(updatedProduct.stock.xl) - Number(buyUnits.xxl),
        }
      }
      // actualizo el producto con el stock restado
      updatedProduct.update(updateStock)
    }
    return res.status(200).send(validate)
  } catch (error) {
    next(error)
  }
};


module.exports = {
  postUserOrder
};




