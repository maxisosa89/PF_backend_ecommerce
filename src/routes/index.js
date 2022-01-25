const router = require('express').Router();

// Importe de todas las rutas:
const { putUserCart } = require('./cart/putUserCart.js');
const { getUserCart } = require('./cart/getUserCart.js');
const { deleteUserCart } = require('./cart/deleteUserCart.js');
const allCategories = require('./categories')
const usersRoute = require("./users.js");
const productDetails = require("./productDetails.js");
const allProducts = require("./allProducts");
const postAccount = require("./routePostAccount");
const categoriesRoute = require("./categories.js");
const ordersAdmin = require("./ordersAdmin");

/*          Configuracion de rutas:        */
// USER:
router.use(usersRoute);

// PRODUCT:
router.use("/products", allProducts);
router.use("/productsDetails/id", productDetails);
router.use("/postAccount", postAccount);
router.use("/ordersAdmin", ordersAdmin);

//CATEGORIES: 
router.use('/', allCategories)

//CATEGORIES:
router.use(categoriesRoute);

//CART:
router.use('/cart/userId', putUserCart);
router.use('/cart/userId', getUserCart);
router.use('/cart/userId/productId', deleteUserCart);


module.exports = router;
