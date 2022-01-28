const router = require("express").Router();
const { Product, Categories } = require("../../db.js");

const getProducts = async (req, res) => {
  try {
    const productsAndCategory = await Product.findAll({
      include: [
        {
          model: Categories,
          through: {
            attributes: [],
          },
        },
      ],
    });

    res.json(productsAndCategory);
  } catch (error) {
    res.json(console.log);
  }
};

module.exports = { getProducts };
