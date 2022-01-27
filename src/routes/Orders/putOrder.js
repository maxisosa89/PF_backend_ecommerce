const { Order, Product } = require("../../db");


const putOrder = async (req, res, next) => {
  
  const { OrderId } = req.params;
  const { shippingStatus } = req.body;
  
  try{

    // Se busca la orden:
    let order = await Order.findByPk(OrderId);
    await order.update({ shippingStatus });

    let codehtml= StatusShop({shippingStatus}, OrderId);
    SendEmails(email, 'Estado de la compra', codehtml)
    
    return res.status(200).json({order});
  
  } catch (error){
    
    console.log("PUT /order/:OrderId", err);
    next(error)
  }
};

module.exports = {putOrder};