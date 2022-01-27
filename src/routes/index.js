const router = require("express").Router();

// Importe de todas las rutas:
const { getProducts } = require("./products/getProducts");
const { postProducts } = require("./products/postProducts");
const { putProducts } = require("./products/putProducts");
const { getUserOrders } = require("./Orders/getUserOrders.js");
const { postUserOrder } = require("./Orders/postUserOrder");
const { getAllOrders } = require("./Orders/getAllOrders.js");
const { putOrder } = require("./Orders/putOrder.js");
const { putUserCart } = require("./Cart/putUserCart");
const { getUserCart } = require("./Cart/getUserCart");
const { deleteUserCart } = require("./Cart/deleteUserCart");
const { productRelations } = require("./categories/getCategories");
const { postCategories } = require("./categories/postCategories");

/*          Configuracion de rutas:        */
// USER:

// CART:
router.put("/cart/:UserId", putUserCart);
router.get("/cart/:UserId", getUserCart);
router.delete("/cart/:UserId", deleteUserCart);

// PRODUCT:

router.get("/products", getProducts);
router.post("/products", postProducts);
router.put("/products", putProducts);

//CATEGORIES:
router.get("/categories", productRelations);
router.post("/categories", postCategories);

// ORDER:
router.get("/orders/:UserId", getUserOrders);
router.get("/orders/:UserId/:OrderId", getUserOrders);
router.post("/order/:UserId", postUserOrder);
//ORDER ADMIN:
router.get("/orders", getAllOrders);
router.put("/order/:OrderId", putOrder);

module.exports = router;
