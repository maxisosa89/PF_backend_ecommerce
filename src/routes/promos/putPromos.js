const router = require("express").Router();
const { Promos } = require("../../db.js");

const putPromos = async (req, res) => {
  const{title,img,resume}= req.body
  const{PromosId}=req.params
  try {
    const info = {
      img: img,
      resume: resume,
      title: title,
  };

  const promoById = await Promos.findOne({where:{PromosId}});

  // productById
  // ? await productById.update({ categories: categories })
  // : console.log("No se ha podido relacionar el producto con la categoria");

  promoById
  ? res.send(await promoById.update(info))
  : res.send("No se ha podido actualizar la promo");
  } catch (error) {
    next(error)
  }
};

module.exports = { putPromos };
