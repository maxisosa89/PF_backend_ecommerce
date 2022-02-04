const { Categories } = require("../../db.js");


const putCategories = async (req, res,next) => {
 
  const { name, img, active } = req.body;
  
  try {
    const { CategoriesId } = req.params;
      
    const info = {
      img: img,
      name: name,
      active: active,
    };
  
    const catById = await Categories.findOne({where:{CategoriesId}});
  
    catById
    ? res.send(await catById.update(info))
    : res.send("No se ha podido actualizar la categoria");
  
  } catch (error) {
    next(error);
  }

};

module.exports = { putCategories };
