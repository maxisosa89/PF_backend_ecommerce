const router = require("express").Router();

// Importe de todas las rutas:
const { getUserOrders } = require("./Orders/getUserOrders.js");
const { postUserOrder } = require("./Orders/postUserOrder");
const { getAllOrders } = require("./Orders/getAllOrders.js");
const { putOrder } = require("./Orders/putOrder.js");
const { putUserCart } = require("./Cart/putUserCart");
const { getUserCart } = require("./Cart/getUserCart");
const { deleteUserCart } = require("./Cart/deleteUserCart");

/*          Configuracion de rutas:        */
// USER:

// CART:
router.put("/cart/:UserId", putUserCart);
router.get("/cart/:UserId", getUserCart);
router.delete("/cart/:UserId", deleteUserCart);

// PRODUCT:

//CATEGORIES:

// ORDER:
router.get("/orders/:UserId", getUserOrders);
router.get("/orders/:UserId/:OrderId", getUserOrders);
router.post("/order/:UserId", postUserOrder);
//ORDER ADMIN:
router.get("/orders", getAllOrders);
router.put("/order/:OrderId", putOrder);

module.exports = router;
