const { Cart, Users } = require("../../db");

const getUserCart = async (req, res, next) => {
  try {
    const { email } = req.params;
    //[Busco el usuario
<<<<<<< HEAD
    let cart = await Cart.findOne({
      where: {
        user: email,
        status: "open",
      },
    });

    console.log(email);
=======
    let cart = await Cart.findAll({
      where:{
        user:email
      }
    })
>>>>>>> a92ffd4a26685d79b7eff18ae7adcbb72ed46140

    return res.send(cart);
  } catch (err) {
    console.log("Get users/cart/:Userid", err);
    next(err);
  }
};

module.exports = { getUserCart };
