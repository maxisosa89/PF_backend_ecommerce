const { Cart, Users, Product } = require("../../db");
const deleteUserCart = async (req, res, next) => {
  try {
    const { CartId, ProductId } = req.query;

    let cart = await Cart.findOne({
      where: {
        CartId,
      },
    });
    console.log(cart.dataValues);
    if (!ProductId) {
      let allCart = {
        productCart: [],
      };
      console.log("SE BORRO EL CARRITO");
      return res.status(200).send(await cart.update(allCart));
    }

    let newCart = cart.productCart.filter((e) => e.ProductId !== ProductId);
    let oneProduct = {
      productCart: newCart,
    };
    console.log("SE BORRO EL ITEM");
    return res.status(200).send(await cart.update(oneProduct));
  } catch (err) {
    console.log("Get users/cart/:id", err);
    res.send(err);
  }
};

module.exports = {
  deleteUserCart,
};
