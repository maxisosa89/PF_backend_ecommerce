const {Cart, Users, Product} = require("../../db");


const putUserCart = async (req,res,next)=>{
  try{
    const { CartId } = req.params;
    const { productsInfo } = req.body;

    let cart = Cart.findOne({where:{CartId}});
    let productId = productsInfo.map(e=>e.ProductId)

    let products = Product.findOne({where:{productId}})

    cart.productCart.addProducts(products)
    
    
    
    return res.status(200).json({cart:  products});
  }catch(err){
    console.log("Get users/cart/:id", err);
    next(err)
  }
};

module.exports = {putUserCart};
