const router = require("express").Router();
const { Product, Categories } = require("../../db.js");

const getProductDetail = async (req, res) => {
  const { id } = req.params;
  console.log(id)
  try {
    const detail = await Product.findOne(
      {
        where: { id },
        include: { 
          model: Categories,
          attributes: ["name"],
          through: {
            attributes: []
          }
        }
      }
    );
    
    console.log(detail);

    res.json(detail);
  
  } catch (error) {
    res.json(error);
  }
};

module.exports = { getProductDetail };
