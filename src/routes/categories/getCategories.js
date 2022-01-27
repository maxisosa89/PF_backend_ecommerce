const router = require("express").Router();
const { Categories } = require("../../db.js");

const getCategories = async (req, res) => {
  let cat = await Categories.findAll();
  
  res.json(cat);
};

module.exports = { getCategories };
