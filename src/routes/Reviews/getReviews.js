const { Product, Reviews } = require("../../db");

const GetReviews = async (req, res, next) => {
  try {
    const { productProductId } = req.params;
    // console.log('idback :>> ', id);
    //busca si existe el id de producto
    const prod = await Reviews.findAll({
      where: {
        productProductId,
      },
    });

    res.json(prod);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  GetReviews,
};
