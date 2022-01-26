const router = require("express").Router();
const { Categories } = require("../../db.js");

const putCategories = async (req, res) => {
  const { id, name, img, active } = req.body;
  try {
    let toEdit = await Categories.findOne({ where: { id } });
    toEdit.name = name;
    toEdit.img = img;
    toEdit.active = active;
    await toEdit.save();
    res.json(toEdit);
  } catch (error) {
    res.json(error);
  }
};

module.exports = { putCategories };
