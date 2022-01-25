const router = require('express').Router();

// Importe de todas las rutas:
const usersRoute = require('./users.js'); 
const productDetails = require('./productDetails.js');
const allProducts = require('./allProducts');
const { getUserOrders } = require('./Orders/getUserOrders.js');
const { postUserOrder } = require('./Orders/postUserOrder');
const { getAllOrders } = require('./Orders/getAllOrders.js');
const { putOrder } = require('./Orders/putOrder.js');
const {putUserCart} = require('./Cart/putUserCart')
const {getUserCart} = require('./Cart/getUserCart')
const {deleteUserCart} = require('./Cart/deleteUserCart')


// Importe de todas las rutas:
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


// CART:
router.put('/cart/:UserId', putUserCart);
router.get('/cart/:UserId', getUserCart);
router.delete('/cart/:UserId', deleteUserCart);



// PRODUCT:
router.use("/products", allProducts);
router.use("/productsDetails/id", productDetails);
router.use("/postAccount", postAccount);
router.use("/ordersAdmin", ordersAdmin);

//CATEGORIES: 
router.use('/', allCategories)

//CATEGORIES:
router.use(categoriesRoute);

// ORDER:
router.get('/orders/:UserId', getUserOrders)
router.get('/orders/:UserId/:OrderId', getUserOrders)
router.post('/order/:UserId',postUserOrder)
//ORDER ADMIN:
router.get('/orders', getAllOrders)
router.put('/order/:OrderId', putOrder)


module.exports = router;
