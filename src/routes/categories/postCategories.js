const { Categories } = require("../../db.js");


const postCategories = async (req, res) => {
  
  const { name, img, active } = req.body;
  
  try {

    let [categoryCreate, boolean] = await Categories.findOrCreate(
      {
        where: { name },
        defaults: {
          name,
          active,
          img,
        }
      }
    );

    res.send(categoryCreate);
  
  } catch (error) {
    next(error);
  }

};

module.exports = { postCategories };
