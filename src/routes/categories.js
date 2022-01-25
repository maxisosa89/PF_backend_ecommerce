const router = require("express").Router();
const { Categories } = require("../db.js");

router.get(async (req, res) => {
  try {
    const { name, img } = req.body;
    const allCategories = await Categories.findAll();
    res.send(allCategories);
  } catch (error) {
    res.send({ error: "Category Couldn´t be created" });
  }
});

router.post(async (req, res) => {
  try {
    const { name, img } = req.body;
    await Categories.findOrCreate({
      where: { name },
      defaults: { img, active: true },
    });

    res.send({ success: "Category has been created" });
  } catch (error) {
    res.send({ error: "Category Couldn´t be created" });
  }
});

router.put(async (req, res) => {
  try {
    const { id } = req.body;
    let CategoryEdited = await Categories.find({
      where: { id },
    });

    CategoryEdited.active = false;
    res.send({ success: "Category has been inactived" });
  } catch (error) {
    res.send({ error: "Category Couldn´t be created" });
  }
});

module.exports = router;
