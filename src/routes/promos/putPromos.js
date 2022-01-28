const router = require("express").Router();
const { Promos } = require("../../db.js");

const putPromos = async (req, res) => {
  const { id, title, img, resume } = req.body;
  try {
    let toEdit = await Promos.findOne({ where: { id } });
    toEdit.title = title;
    toEdit.img = img;
    toEdit.active = resume;
    await toEdit.save();
    res.json(toEdit);
  } catch (error) {
    res.json(error);
  }
};

module.exports = { putPromos };
