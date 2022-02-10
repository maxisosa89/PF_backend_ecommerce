const mercadopago = require("mercadopago");
const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

mercadopago.configure({
  access_token:
    "TEST-4990834846951605-012518-58602750113b1537666f2e7b874ed678-194085383",
});

const mercadoPagoPost = async (req, res) => {
  let preference = {
    items: req.body.map((el) => {
      return {
        title: el.name,
        unit_price: Number(el.price),
        quantity: Object.keys(el.stockSelected).reduce(
          (acc, talla) => (acc += Number(el.stockSelected[talla])),
          0
        ),
      };
    }),
  };

  //axios.post("http://localhost:3001/checkout",
  // cart.productcard.map(el =>
  // {title:el.name, unit_price:Number(el.price), Number(quantity:el.qty) })
  //)
  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      // res.redirect(response.body.init_point)
      // console.log(response.body)
      res.send(response.body.init_point);
    })
    .catch(function (err) {
      console.log(err);
    });
};
module.exports = { mercadoPagoPost };
