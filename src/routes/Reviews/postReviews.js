const { Product, User, Reviews } = require("../../db");

const PostReviews = async (req, res, next) => {
  try {
    let { productProductId, score, description } = req.body;

    const newReview = await Reviews.create({
      productProductId,
      score,
      description,
    });
    res.json(newReview);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  PostReviews,
};
