const router = require("express").Router();
const { Product } = require("../../db.js");

const postProducts = async (req, res) => {
  try {
    const { name, img, price, description, aditionalInformation } = req.body;
    Product.findOrCreate({
      where: { name },
      defaults: { img, price, description, aditionalInformation },
    });
    res.send({ success: "Product has been created" });
  } catch (error) {
    res.json({ error });
  }
};

module.exports = {
  postProducts,
};
