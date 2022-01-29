const {Cart, Users} = require("../../db");


const getUserCart = async (req,res,next)=>{
  try{
    const {UsersId} = req.params;
    //[Busco el usuario
    let cart = await Cart.findOne({
      where:{
        UsersId,
        status: "created"
      }
    })

    res.status(200).json({user, cart});
  }catch(err){
    console.log("Get users/cart/:Userid", err);
    next(err)
  }
};

module.exports = {getUserCart};