const { Reviews } = require("../../db");

const DeleteReviews = async (req, res, next) => {
  try {
    const { ReviewId } = req.params;
    const revi = await Reviews.findByPk(ReviewId);
    await revi.destroy(); // eliminacion fisica;

    res.json("review eliminada");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  DeleteReviews,
};
