const router = require("express").Router();
const { Product, Categories } = require("../db")
const data = require('../data.json')


const productRelations = async () => {
  const categories = data[1].map((c)=>({
    name:c.name,
    active:c.active,
    img:c.img
  }))       
  await Categories.bulkCreate(categories);

  try {
    const products = data[0].map((p)=>({
      name:p.name,
      price:p.price,
      soldQty:p.soldQty,
      img:p.img,
      description:p.description,
      aditionalInformation:p.aditionalInformation,
      stock:p.sotck
    }))

    await Categories.bulkCreate(allCategories)
    const allCategories = await Categories.findAll();
    const allProducts = await Product.findAll();
    !allProducts.length && (await Product.bulkCreate(products));
    const relatedProducts = await Product.findAll();

    relatedProducts.map(async (el) => {
      const findedCategory = await Categories.findOne({
        where: {
          name: allCategories.map(c=>{
            el.categories.includes(c)?c:null
          })
        },
      });

      const findedProduct = await Product.findOne({
        where: {
          name: el,
        },
      });

      findedProduct.addCategories(findedCategory);
    });
    return relatedProducts
  } catch (error) {
    console.log("ERROR", error)
  }
};


module.exports = { productRelations };