const router = require("express").Router();
const { Categories } = require("../../db.js");

const postCategories = async (req, res) => {
  const { name, img, active } = req.body;
  let [categoryCreate, boolean] = await Categories.findOrCreate({
    where: { name },
    defaults: {
      name,
      active,
      img,
    },
  });

  res.send(categoryCreate);
};

module.exports = { postCategories };
