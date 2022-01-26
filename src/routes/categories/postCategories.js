const router = require("express").Router();
const { Categories } = require("../../db.js");

const postCategories = async (req, res) => {
    const { name, img } = req.body;
    const active = true;
    let categoryCreate = await Categories.findOrCreate({
        where: { name:name },
      });
    res.send(categoryCreate);
};

module.exports = { postCategories };
