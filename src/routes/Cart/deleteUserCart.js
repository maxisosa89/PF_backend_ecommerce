const {Cart, Users} = require("../../db");
const deleteUserCart = async(req,res,next)=>{
try {
  const {UsersId} = req.params;
  const {ProductId=null} = req.query;
  let user = await Users.findByPk(UsersId);

  let cart = null;
  
  if(ProductId){
    //! console.log("pruebaidproduct",idProduct)
    cart= await user.removeProduct(ProductId);
  }else{
    cart = await Cart.destroy({
      where:{
        UsersId
      }
    });
  }

  let products = await user.getProducts({
    attributes: ["ProductId","name", "price", "stock","img"]
  });
  products = products.map(el=>{
    const{ProductId, name, price, stock,img, cart:{amount}} = el.toJSON()
    return {ProductId, name, price, stock,img, amount, totalPrice:amount*price}
  })

  return res.status(200).json({cart:  products});

  
} catch (error) {
  console.log("DELETE /users/cart/:UserId?idProduct= ", error);
  next(error);
}
}

module.exports={
  deleteUserCart
};