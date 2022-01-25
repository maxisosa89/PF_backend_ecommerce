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

// ORDER:
router.get('/orders/:UserId', getUserOrders)
router.get('/orders/:UserId/:OrderId', getUserOrders)
router.post('/order/:UserId',postUserOrder)
//ORDER ADMIN:
router.get('/orders', getAllOrders)
router.put('/order/:OrderId', putOrder)


module.exports = router;
