const { Product, User, Reviews } = require("../../db");

const PutReviews = async (req, res, next) => {
  const { ReviewsId, score, description } = req.body;

  try {
    let toEdit = await Reviews.findByPk(ReviewsId);
    toEdit.score = score;
    toEdit.description = description;
    await toEdit.save();
    res.json(
      `Review edited:
       ${toEdit}`
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  PutReviews,
};
