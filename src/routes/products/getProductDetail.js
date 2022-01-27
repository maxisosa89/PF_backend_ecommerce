const router = require("express").Router();
const { Product, Categories } = require("../../db.js");

const getProductDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const Detail = await Product.findOne({
      where: {
        id,
      },
      include: [
        {
          model: Categories,
          attributes: ["name"], // se relacionan las actividades de cada país
          through: {
            attributes: [],
          },
        },
      ],
    });
    res.json(Detail);
  } catch (error) {
    res.json(error);
  }
};

module.exports = { getProductDetail };
