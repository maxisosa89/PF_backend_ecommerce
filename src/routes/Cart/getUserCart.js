const {Cart, Users} = require("../../db");


const getUserCart = async (req,res,next)=>{
  try{
    const {email} = req.body;
    //[Busco el usuario
    let cart = await Cart.findOne({
      where:{
        user:email,
        status: "created"
      }
    })

    return res.status(200).json(cart);
  }catch(err){
    console.log("Get users/cart/:Userid", err);
    next(err)
  }
};

module.exports = {getUserCart};