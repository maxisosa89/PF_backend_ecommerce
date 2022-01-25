const router = require("express").Router();
// Importe de todas las rutas:
const usersRoute = require("./users.js");
const productDetails = require("./productDetails.js");
const allProducts = require("./allProducts");
const categories = require("./categories");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

/*          Configuracion de rutas:        */
// USER:
router.use(usersRoute);

// PRODUCT:
router.use("/products", productDetails);
router.use("/products", allProducts);
router.use("/categories", categories);

module.exports = router;
