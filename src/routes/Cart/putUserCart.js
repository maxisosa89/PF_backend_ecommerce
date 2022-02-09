const { Cart, Users, Product } = require("../../db");

const putUserCart = async (req, res, next) => {
  try {
    const { CartId } = req.params;
    const ProductInfo = req.body;
    // console.log( ProductInfo[0])

    let ProductId = ProductInfo?.ProductId;
    let cart = await Cart.findOne({
      where: {
        CartId,
      },
    });

    let carrito = cart.productCart;

    if (carrito.find((p) => p.ProductId === ProductId)) {
      return res.status(400).json("ESTE PRODUCTO YA EXISTE EN EL CARRITO");
    }

    let product = await Product.findOne({
      where: {
        ProductId,
      },
    });

    infoUpdateCart = {
      productCart: [...cart.productCart, ProductInfo],
    };
    return res.send(await cart.update(infoUpdateCart));
    // }
    //  else if (Status && !ProductInfo) {
    //   let cart = await Cart.findOne({
    //     where: {
    //       CartId,
    //     },
    //   });
    //   updatedStatus = {
    //     status: Status,
    //   };
    //   return res.status(200).send(await cart.update(updatedStatus));
    // }
  } catch (err) {
    // console.log("Get users/cart/:id", err);
    next(err);
  }
};

module.exports = { putUserCart };