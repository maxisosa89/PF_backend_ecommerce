//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const {
  Product,
  Cart,
  Categories,
  Promos,
  Details,
  Order,
  Reviews,
  Users,
  Product_categories
} = require("../PF_backend_ecommerce/src/db");

// let bool = true

// if (bool)
// bulk
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
    ranking: Math.round(Math.random() * 5),
    price: Math.round(Math.random() * 100) + 50,
    description:
      "es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",
    aditionalInformation:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    stock: {
      xs: Math.round(Math.random() * 10),
      s: Math.round(Math.random() * 10),
      m: Math.round(Math.random() * 10),
      l: Math.round(Math.random() * 10),
      xl: Math.round(Math.random() * 10),
      xxl: Math.round(Math.random() * 10),
    },
  });
}

var defaultPromos = [
  {
    title: "Gran promoción!",
    img: "https://image.freepik.com/foto-gratis/foto-calle-hermosa-chica-anteojos-rojos-capucha-vestido-chaqueta-colorida-verde_8353-7008.jpg",
    resume: "Por la compra de dos unidades te damos las gracias",
  },
  {
    title: "ültima hora :O!",
    img: "https://image.freepik.com/foto-gratis/mujer-hispana-riendo-alegremente-pared-graffiti-flores_181624-46424.jpg",
    resume: "50% de descuento en una prenda tendencia",
  },
  {
    title: "Puedes creer que..!",
    img: "https://image.freepik.com/foto-gratis/mujer-hermosa-calle_144627-11073.jpg",
    resume: "Compra 5 unidades y multiplicas el precio unitario por 5",
  },
];

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-
    let variable = false;

    await Cart.sync({force:variable});
    await Categories.sync({force:variable});
    await Details.sync({force:variable});
    await Order.sync({force:variable});
    await Product.sync({force:variable});
    await Promos.sync({force:variable});
    await Reviews.sync({force:variable})
    await Users.sync({force:variable});
    await Product_categories.sync({force:variable});
    
    const data = [
      {
        name: "Women Clothing",
        active: true,
        img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/1-370x497.jpg",
      },
      {
        name: "Men Clothing",
        active: true,
        img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/13-370x497.jpg",
      },
      {
        name: "Dresses",
        active: true,
        img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/18_4-370x497.jpg",
      },
      {
        name: "Jeans",
        active: true,
        img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/4_3-370x497.jpg",
      },
      {
        name: "Shoes",
        active: true,
        img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/2-370x497.jpg",
      },
      {
        name: "Lingerie",
        active: true,
        img: "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/14_1-370x497.jpg",
      },
    ];
    cat = await Categories.bulkCreate(data);
    var allProducts = await Product.findAll();
    !allProducts.length && (await Product.bulkCreate(arr));
    allProducts = await Product.findAll();
    var allCategories = await Categories.findAll();

    
    // allProducts.map(async (el) => {
    //   const findedCategory = await Categories.findOne({
    //     where: {
    //       name: allCategories[
    //         Math.round((allCategories.length - 1) * Math.random())
    //       ].name,
    //     },
    //   });

    //   const findedProduct = await Product.findOne({
    //     where: {
    //       name: el.name,
    //     },
    //   });

    //   findedProduct.addCategories(findedCategory);
    // });
    await Promos.bulkCreate(defaultPromos);
  });
});
