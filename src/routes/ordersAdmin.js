const router = require("express").Router();

router.get("/", async (req, res) => {
  res.json([
    {
      products: [
        {
          id: 1,
          name: "Baheera’s Winter Jacket",
          talle: "XL",
          cantidad: 1,
          price: 3000,
        },
       ],
      client: {
        name: "juan",
        Email: "juan@gmail.com",
        country: "Argentina",
        city: "Chascomús",
        street: "calle 100 no 100",
        timestamps: "15 de enero 2021",
      },
    },
  ]);
});

module.exports = router;
