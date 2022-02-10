const router = require("express").Router();

// Importe de todas las rutas:
const { getProducts } = require("./products/getProducts");
const { getProductDetail } = require("./products/getProductDetail");
const { updateProducts } = require("./products/postProducts");
const { updateProductAdm } = require("./products/putProducts");

const { getPromos } = require("./promos/getPromos");
const { postPromos } = require("./promos/postPromos");
const { putPromos } = require("./promos/putPromos");

const { getAllOrders } = require("./Orders/getAllOrders.js");
const { getUserOrders } = require("./Orders/getUserOrders.js");
const { postUserOrder } = require("./Orders/postUserOrder");
const { putOrder } = require("./Orders/putOrder.js");

const { getAllCarts } = require("./Cart/getAllCarts");
const { getUserCart } = require("./Cart/getUserCart");
const { putUserCart } = require("./Cart/putUserCart");
const { deleteUserCart } = require("./Cart/deleteUserCart");

const { getCategories } = require("./categories/getCategories");
const { postCategories } = require("./categories/postCategories");
const { putCategories } = require("./categories/putCategories");

const { postUsers } = require("./Users/routePostAccount");
const { getActualUser } = require("./Users/getActualUser");
const { getUsers } = require("./Users/getUsers");
const { putUser } = require("./Users/putUser");

const { GetReviews } = require("./Reviews/getReviews");
const { PostReviews } = require("./Reviews/postReviews");
const { PutReviews } = require("./Reviews/putReviews");
const { DeleteReviews } = require("./Reviews/deleteReviews");

const { mercadoPagoPost } = require("./mercadoPago/mercadoPago.js");

/*          Configuracion de rutas:        */

// Reviews:
router.get("/reviews/:productProductId", GetReviews);
router.post("/reviews", PostReviews);
router.put("/reviews", PutReviews);
router.put("/reviews/:ReviewId", DeleteReviews);

// USER:
router.post("/users", postUsers);
router.get("/users/:email", getActualUser);
router.get("/users", getUsers);
router.put("/users", putUser);

// CART:
router.get("/carts", getAllCarts);
router.get("/cart/:email", getUserCart);
router.put("/cart/:CartId", putUserCart);
router.delete("/cart", deleteUserCart);

// PRODUCT:
router.get("/products", getProducts);
router.get("/products/:ProductId", getProductDetail);
router.post("/products", updateProducts);
router.put("/products", updateProductAdm);

//PROMOS:
router.get("/promos", getPromos);
router.post("/promos", postPromos);
router.put("/promos", putPromos);

//CATEGORIES:
router.get("/categories", getCategories);
router.post("/categories", postCategories);
router.put("/categories/:CategoriesId", putCategories);

// ORDER:
// router.get("/orders/:UserId", getUserOrders);
// router.get("/orders/:UserId/:OrderId", getUserOrders);
router.post("/order/:CartId", postUserOrder);

// //ORDER ADMIN:
// router.get("/orders", getAllOrders);
// router.put("/order/:OrderId", putOrder);

//MERCADOPAGO:
router.post("/checkout", mercadoPagoPost);

module.exports = router;
