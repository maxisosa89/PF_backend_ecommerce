const { Product, Categories } = require("../../db.js");

const getProductDetail = async (req, res, next) => {
  try {
    let { ProductId } = req.params;
    const Detail = await Product.findOne({
      where: {
        ProductId,
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
    res.status(200).json(Detail);
  } catch (error) {
    next(error);
  }
};

module.exports = { getProductDetail };
