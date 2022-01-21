const router = require('express').Router();
// Importe de todas las rutas:
const usersRoute = require('./users.js'); 
const productDetails = require('./productDetails.js');
const allProducts = require('./allProducts')
const allCategories = require('./categories')

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

/*          Configuracion de rutas:        */
// USER:
router.use(usersRoute);


// PRODUCT:
router.use('/products', productDetails);
router.use('/products', allProducts);

//CATEGORIES: 
router.use('/', allCategories)


module.exports = router;
