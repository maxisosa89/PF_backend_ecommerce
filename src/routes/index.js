const router = require('express').Router();
// Importe de todas las rutas:
const usersRoute = require('./users.js'); 
const productDetails = require('./productDetails.js');
const allProducts = require('./allProducts')
const {putUserCart} = require('./Cart/putUserCart')
const {getUserCart} = require('./Cart/getUserCart')
const {deleteUserCart} = require('./Cart/deleteUserCart')

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

/*          Configuracion de rutas:        */
// USER:
router.use(usersRoute);

// CART:
router.put('/cart/:UserId', putUserCart);
router.get('/cart/:UserId', getUserCart);
router.delete('/cart/:UserId', deleteUserCart);


// PRODUCT:
router.use('/products', productDetails);
router.use('/products', allProducts);


module.exports = router;
