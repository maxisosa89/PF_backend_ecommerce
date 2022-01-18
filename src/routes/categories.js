const router = require("expres").Router();
const { Product } = require("../db.js");

router.get("/categories", async (req, res) => {
  res.json([
    "Calzado",
    "Jeans",
    "Dresses",
    "Women Clothing",
    "Men Clothing",
    "Lingerie",
  ]);
});

module.exports = router;
