const router = require("express").Router();

router.get("/", async (req, res) => {
  res.json({
    image:
      "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/21_4-470x632.jpg",
    productName: "Graffitti Dress",
    price: "$600",
    client: [
      {
        name: "Pepito Perez",
        Email: "pepitoperez@gmail.com",
        country: "Le Colombi",
        city: "Bogotá",
        street: "calle 100 no 100",
        timestamps: "15 de enero 2021",
      },
    ],
    status: ["Pending", "cancelled", "delivered"],
    description: "3 Graffitti Dress a 200 each one",
    showDetails: "",
  });
});

module.exports = router;
