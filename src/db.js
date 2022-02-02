require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

let sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: DB_NAME,
        dialect: "postgres",
        host: DB_HOST,
        port: 5432,
        username: DB_USER,
        password: DB_PASSWORD,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            // Ref.: https://github.com/brianc/node-postgres/issues/2009
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(
        `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/ecommerce`,
        { logging: false, native: false }
      );

/* const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/ecommerce`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
); */
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const { Users, Product, Cart, Order, Details, Categories, Promos } =
  sequelize.models;

// Aca vendrian las relaciones

//Muchos productos pueden estar en una misma orden y distintas ordenes pueden tener a los mismos productos
Product.belongsToMany(Categories, { through: "Product_categories" }); //orders
Categories.belongsToMany(Product, { through: "Product_categories" }); //products

//Cada usuario puede guardar en su carrito muchos productos, y estos productos pueden ser los mismos para distintos usuarios
//Cart es una relacion entre usuarios y productos
Product.belongsToMany(Users, { through: "Product_users" }); //users
Users.belongsToMany(Product, { through: "Product_users" }); //products

//Muchos productos pueden estar en una misma orden y distintas ordenes pueden tener a los mismos productos
Product.belongsToMany(Cart, { through: "Product_cart" }); //orders
Cart.belongsToMany(Product, { through: "Product_cart" }); //products

//Un usuario puede tener varias ordenes, pero cada orden pertenece a un único usuario
Cart.belongsToMany(Users, { through: "UserCart" }); //orders
Users.belongsToMany(Cart, { through: "UserCart" }); //products

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};