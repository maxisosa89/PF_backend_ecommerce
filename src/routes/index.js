const router = require('express').Router();

// Importe de todas las rutas:
const usersRoute = require('./users.js'); 
const productDetails = require('./productDetails.js');
const allProducts = require('./allProducts')
const postAccount = require('./routePostAccount')
const categories = require('./categories')
const orderAdmin = require('./ordersAdmin')

/*          Configuracion de rutas:        */
// USER:
router.use(usersRoute);

// PRODUCT:
router.use('/products', allProducts);
router.use('/productsDetails/id', productDetails);
router.use('/postAccount',postAccount )
router.use('/categories', categories )
router.use('/orderAdmin', orderAdmin)



module.exports = router;
