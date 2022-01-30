const router = require("express").Router();

// Importe de todas las rutas:
const { getProducts } = require("./products/getProducts");
const { getProductDetail } = require("./products/getProductDetail");
const { postProducts } = require("./products/postProducts");
const { putProducts } = require("./products/putProducts");

const { getPromos } = require("./promos/getPromos");
const { postPromos } = require("./promos/postPromos");
const { putPromos } = require("./promos/putPromos");

const { getUserOrders } = require("./Orders/getUserOrders.js");
const { postUserOrder } = require("./Orders/postUserOrder");
const { putOrder } = require("./Orders/putOrder.js");

const { getAllCarts } = require("./Cart/getAllCarts.js");
const { getUserCart } = require("./Cart/getUserCart");
const { putUserCart } = require("./Cart/putUserCart");
const { deleteUserCart } = require("./Cart/deleteUserCart");

const { getCategories } = require("./categories/getCategories");
const { postCategories } = require("./categories/postCategories");
const { putCategories } = require("./categories/putCategories");
const { postUsers } = require("./Users/routePostAccount");
const { getActualUser } = require("./Users/getActualUser");

const { mercadoPagoPost } = require('./mercadoPago/mercadoPago.js');

/*          Configuracion de rutas:        */
// USER:
router.post("/postAccount", postUsers);
router.get("/actualUser/:email", getActualUser);

// CART:
router.put("/cart/:UserId", putUserCart);
router.get("/cart/:UserId", getUserCart);
router.delete("/cart/:UserId", deleteUserCart);

// PRODUCT:
router.get("/products", getProducts);
router.get("/products/:id", getProductDetail);
router.post("/products", postProducts);
router.put("/products", putProducts);

//PROMOS:
router.get("/promos", getPromos);
router.post("/promos", postPromos);
router.put("/promos", putPromos);

//CATEGORIES:
router.get("/categories", getCategories);
router.post("/categories", postCategories);
router.put("/categories", putCategories);

// ORDER:
router.get("/orders/:UserId", getUserOrders);
router.get("/orders/:UserId/:OrderId", getUserOrders);
router.post("/order/:UserId", postUserOrder);

//ORDER ADMIN:
// router.get("/orders", getAllCarts);
router.put("/order/:OrderId", putOrder);

//MERCADOPAGO:
router.get("/checkout", mercadoPagoPost)


module.exports = router;
