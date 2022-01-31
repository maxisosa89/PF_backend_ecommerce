const mercadopago = require("mercadopago");
const express = require("express");
const app = express();

const router = require("express").Router();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

mercadopago.configure({
  access_token:
    "TEST-4990834846951605-012518-58602750113b1537666f2e7b874ed678-194085383",
});

const mercadoPagoPost = async (req, res) => {
  const { title, unit_price, quantity } = req.body;
  let preference = {
    items: [
      {
        title: title,
        unit_price: Number(unit_price),
        quantity: Number(quantity),
      },
    ],
  };
  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      // res.redirect(response.body.init_point)
      // console.log(response.body)
      res.send(response.body);
    })
    .catch(function (err) {
      console.log(err);
    });
};
module.exports = { mercadoPagoPost };
