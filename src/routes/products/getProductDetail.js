const { Product, Categories } = require("../../db.js");

const getProductDetail = async (req, res, next) => {
  
  let { ProductId } = req.params;
  
  try {  
    
    const Detail = await Product.findOne(
      {
        where: { ProductId },
        include: [
          {
            model: Categories,
            attributes: ["name"],
            through: { attributes: [] },
          },
        ],
      }
    );
    
    res.status(200).json(Detail);
  
  } catch (error) {
    next(error);
  }

};

module.exports = { getProductDetail };
