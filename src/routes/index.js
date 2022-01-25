const router = require('express').Router();
// Importe de todas las rutas:
const usersRoute = require('./users.js'); 
const productDetails = require('./productDetails.js');
const allProducts = require('./allProducts');
const { putUserCart } = require('./cart/putUserCart.js');
const { getUserCart } = require('./cart/getUserCart.js');
const { deleteUserCart } = require('./cart/deleteUserCart.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

/*          Configuracion de rutas:        */
// USER:
router.use(usersRoute);


// PRODUCT:
router.use('/products', productDetails);
router.use('/products', allProducts);

//CART:
router.use('/cart/userId', putUserCart);
router.use('/cart/userId', getUserCart);
router.use('/cart/userId/productId', deleteUserCart);


module.exports = router;
