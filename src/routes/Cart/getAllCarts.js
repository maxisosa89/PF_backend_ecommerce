const {Cart} = require("../../db");


const getAllCarts = async (req,res,next)=>{
  try{
    let cart = await Cart.findAll()
    res.status(200).json(cart);
  }catch(err){
    console.log("Get /carts", err);
    next(err)
  }
};

module.exports = {getAllCarts};