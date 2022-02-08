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
const {
  prueba,
  camisetas,
  vestidos,
  pantalones,
  defaultPromos,
  defaultUsers,
  categorias,
  blusas,
} = require("./bulkCreate");
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
  Product_categories,
} = require("./src/db");

// let bool = true

// if (bool)
// bulk

const port = process.env.PORT || "3001";

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(port, async () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-

    var allCategories = await Categories.findAll();
    allCategories.length === 0 &&
      (await Categories.bulkCreate(categorias.map((e) => e)));

    const allPromos = Promos.findAll();
    !allPromos.length && (await Promos.bulkCreate(defaultPromos.map((e) => e)));

    let validate = await Users.findAll();
    validate.length === 0 &&
      (await Users.bulkCreate(defaultUsers.map((e) => e)));

    // blusas, camisetas, vestidos, pantalones,
    let variable = await Product.findAll();
    if (variable.length === 0) {
      var bulkBlusas = await Product.bulkCreate(blusas);
      var bulkVestidos = await Product.bulkCreate(vestidos);
      var bulkPantalones = await Product.bulkCreate(pantalones);
      var bulkCamisetas = await Product.bulkCreate(camisetas);

      bulkBlusas.length;
      bulkBlusas.map(async (el) => {
        const category = await Categories.findOne({
          where: {
            name: "Blusas",
          },
        });
        el.addCategories(category);
      });

      bulkVestidos.length &&
        bulkVestidos.map(async (el) => {
          const category = await Categories.findOne({
            where: {
              name: "Vestidos",
            },
          });
          el.addCategories(category);
        });

      bulkCamisetas.length &&
        bulkCamisetas.map(async (el) => {
          const category = await Categories.findOne({
            where: {
              name: "Camisetas",
            },
          });
          el.addCategories(category);
        });

      bulkPantalones.length &&
        bulkPantalones.map(async (el) => {
          const category = await Categories.findOne({
            where: {
              name: "Pantalones",
            },
          });
          el.addCategories(category);
        });

      const allProducts = await Product.findAll();
      allProducts.map(async (p, index) => {
        await Reviews.create({
          productProductId: p.ProductId,
          score: (index < 4 && 1) || (index < 8 && 3) || (index < 16 && 4) || 5,
          description: "Me encanta el diseño",
        });
      });
    }
  });
});