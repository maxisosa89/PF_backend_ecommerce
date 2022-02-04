const { Categories } = require("../../db.js");


const getCategories = async (req, res, next) => {
  
  try {

    let cat = await Categories.findAll();
    
    res.json(cat);

  } catch (error) {
    next(error)
  }

};


module.exports = { getCategories };
