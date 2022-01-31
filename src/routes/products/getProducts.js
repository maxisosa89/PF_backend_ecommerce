const { Product, Categories } = require("../../db.js");


const getProducts = async (req, res, next) => {
 
  try {
    
    const productsAndCategory = await Product.findAll(
      {
        include: [
          {
            model: Categories,
            through: { attributes: [] },
          },
        ],
      }
    );

    res.json(productsAndCategory);
  
  } catch (error) {
    next(error);

  }
};


module.exports = { getProducts };
