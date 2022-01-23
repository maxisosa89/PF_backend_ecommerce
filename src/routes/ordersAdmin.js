const router = require("express").Router();

router.get("/", async (req, res) => {
  res.json([
    {
      products: [
        {
          id: 1,
          name: "juan",
          talle: "XL",
          cantidad: 1,
          price: 3000,
        },
        {
          id: 2,
          name: "Juana",
          talle: "Xs",
          cantidad: 2,
          price: 9000,
        },
        {
          id: 3,
          name: "Luis",
          talle: "M",
          cantidad: 3,
          price: 12000,
        },
        {
          id: 4,
          name: "Camila",
          talle: "M",
          cantidad: 2,
          price: 6000,
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
