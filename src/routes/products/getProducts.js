const router = require("express").Router();
const { Product } = require("../../db.js");

var images = [
  "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/19_4-370x497.jpg",
  "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/16-370x497.jpg",
  "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/15_4-370x497.jpg",
  "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/4_4-370x497.jpg",
  "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/20_3-370x497.jpg",
  "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/17_4-370x497.jpg",
  "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/21_4-370x497.jpg",
  "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/21_4-370x497.jpg",
  "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/13-370x497.jpg",
  "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/5-370x497.jpg",
];

var names = [
  "Baheera’s Winter Jacket",
  "Crescent Bay Wallet Grey",
  "Men’s Shorts",
  "Men’s Shorts",
  "Knitted Gloves Turquoise",
  "White top",
  "Women’s T-Shirt",
  "Grey’s Metal Belt",
  "Mi-Pac Peruvian Stripe Backpack",
  "bad clothe",
];

var qty = 30;
let arr = [];

while (qty > 0) {
  qty -= 1;
  var index = images[Math.round(Math.random() * 9)];
  arr.push({
    name: names[Math.round(Math.random() * 9)],
    img: [index, index, index, index, index],
    price: Math.round(Math.random() * 100) + 50,
    description:
      "es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",
    aditionalInformation:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
  });
}

const getProducts = async (req, res) => {
  try {
    const allProducts = await Product.findAll();
    !allProducts.length && (await Product.bulkCreate(arr));
    res.json(await Product.findAll());
  } catch (error) {
    res.json(console.log);
  }
};

module.exports = { getProducts };
