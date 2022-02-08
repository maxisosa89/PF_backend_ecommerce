const { Cart, Users } = require("../../db");

const getUserCart = async (req, res, next) => {
  try {
    const { email } = req.params;
    //[Busco el usuario
    let cart = await Cart.findOne({
      where: {
        user: email,
        status: "open",
      },
    });

    console.log(email);

    return res.send(cart);
  } catch (err) {
    console.log("Get users/cart/:Userid", err);
    next(err);
  }
};

module.exports = { getUserCart };
