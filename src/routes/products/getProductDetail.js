const router = require("express").Router();
const { Product } = require("../../db.js");

const getProductDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const Detail = await Product.findOne({
      where: {
        id,
      },
    });
    res.json(Detail);
  } catch (error) {
    res.json(error);
  }
};

module.exports = { getProductDetail };
