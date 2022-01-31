const router = require("express").Router();
const { Promos } = require("../../db.js");

const putPromos = async (req, res) => {
  const { PromosId, title, img, resume } = req.body;
  try {
    let toEdit = await Promos.findOne({ where: { PromosId } });
    toEdit.title = title;
    toEdit.img = img;
    toEdit.resume = resume;
    await toEdit.save();
    res.json(
      `Product edited:
       ${toEdit}`
    );
  } catch (error) {
    res.json(error);
  }
};

module.exports = { putPromos };
