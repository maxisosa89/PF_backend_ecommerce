const router = require('express').Router();


// Importe de todas las rutas:
const usersRoute = require('./users.js'); 
const productDetails = require('./productDetails.js');


/*          Configuracion de rutas:        */
// USER
router.use('/user', usersRoute);


// PRODUCT
router.use('/products', productDetails);


module.exports = router;
