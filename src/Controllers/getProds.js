const data = require ('../data.json')

const doRelations = async (req, res) => {
  try {
    const allProducts = data[0];
    const allCategories = data[1];
    const relatedProducts = data[0];

    relatedProducts.map(async (el) => {
      const findedCategory = await Categories.findOne({
        where: {
          name: allCategories[
            Math.round((allCategories.length - 1) * Math.random())
          ].name,
        },
      });

      const findedProduct = await Product.findOne({
        where: {
          name: el.name,
        },
      });

      findedProduct.addCategories(findedCategory);
    });

    const productsAndCategory = await Product.findAll({
      include: [
        {
          model: Categories,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      ],
    });

    res.json(productsAndCategory);
  } catch (error) {
    res.json(console.log);
  }
};

module.exports = { doRelations };