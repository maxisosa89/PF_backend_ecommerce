const router = require("express").Router();
const { Users, Cart } = require("../../db");

const getActualUser =
  ("/",
  async (req, res) => {
    const { email } = req.params;
    try {
      let actualUser = await Users.findOne({
        where: { email },
        include: {
          model: Cart,
          attributes: ['CartId'],
          through: {
              attributes: [],
          },
      }
      })
      res.status(200).json(actualUser);
    } catch (e) {
      console.log(e)
    }
   
  });

module.exports = { getActualUser };