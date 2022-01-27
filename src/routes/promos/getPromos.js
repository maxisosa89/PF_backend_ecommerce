const router = require("express").Router();
const { Promos } = require("../../db.js");

const getPromos = async (req, res) => {
  try {
    res.json(await Promos.findAll());
  } catch (error) {
    res.json(error);
  }
};

module.exports = { getPromos };
