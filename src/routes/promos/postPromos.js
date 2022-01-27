const router = require("express").Router();
const { Promos } = require("../../db.js");

const postPromos = async (req, res) => {
  const { title, img, resume, idProduct } = req.body;
  try {
    const [newPromo, boolean] = await Promos.findOrCreate({
      where: {
        title,
      },
      defaults: {
        img,
        resume,
      },
    });
    res.json(boolean ? newPromo : "Promo already exists");
  } catch (error) {}
};

module.exports = { postPromos };
