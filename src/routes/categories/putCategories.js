const router = require("express").Router();
const { Categories } = require("../../db.js");

const putCategories = async (req, res,next) => {
  try {
    const { name, img, active } = req.body;
    const{CategoriesId}=req.params;
      const info = {
        img: img,
        name: name,
        active: active,
    };
  
    const catById = await Categories.findOne({where:{CategoriesId}});
  
    // productById
    // ? await productById.update({ categories: categories })
    // : console.log("No se ha podido relacionar el producto con la categoria");
  
    catById
    ? res.send(await catById.update(info))
    : res.send("No se ha podido actualizar la categoria");
  } catch (error) {
    next(error);
  }
};

module.exports = { putCategories };
