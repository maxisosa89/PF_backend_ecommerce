const router = require('express').Router();
// Importe de todas las rutas:
const usersRoute = require('./users.js'); 
const productDetails = require('./productDetails.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

/*          Configuracion de rutas:        */
// USER:
router.use(usersRoute);


// PRODUCT:
router.use('/products', productDetails);



module.exports = router;
