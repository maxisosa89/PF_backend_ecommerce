const {Cart, Users} = require("../../db");


const getUserCart = async (req,res,next)=>{
  try{
    const {UsersId} = req.params;
    //[Busco el usuario
    let user = await Users.findByPk(UsersId);
    //[Busco los productos del carrito del usuario
    let cart = await user.getProducts({
      attributes: ["ProductId","name", "price", "stock","image"]
    });
    //[Ordeno los datos para presentarlos de la misma manera que en otras rutas donde uso el carrito
    cart = cart.map(el=>{
      let {ProductId, name, price, stock,img, cart:{amount}}= el.toJSON();
      return {ProductId, name, price, stock,img, amount};
    })
    res.status(200).json({user, cart});
  }catch(err){
    console.log("Get users/cart/:Userid", err);
    next(err)
  }
};

module.exports = {getUserCart};