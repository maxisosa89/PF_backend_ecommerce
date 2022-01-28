const router = require("express").Router();
const { Users } = require("../../db");

const getActualUser =
  ("/",
  async (req, res) => {
    const { UsersId } = req.params;
    try {
       let actualUser = await Users.findOne({ where: { UsersId } })
    res.status(200).json(actualUser);
    } catch (e) {
      console.log(e)
    }
   
  });

module.exports = { getActualUser };