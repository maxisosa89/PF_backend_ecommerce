const router = require("express").Router();
const { Users } = require("../../db");

const getActualUser =
  ("/",
  async (req, res) => {
    const { email } = req.params;
    let actualUser = await Users.findOne({ where: { email } })
    res.send(actualUser);
  });

module.exports = { getActualUser };