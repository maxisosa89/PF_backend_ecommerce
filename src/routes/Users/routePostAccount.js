const router = require("express").Router();
const { Users, Cart } = require("../../db");

const postUsers =
  ("/",
  async (req, res) => {
    const { name, picture, email } = req.body;
    let accountCreated = await Users.findOrCreate({
      where: { email },
      defaults: {
        name,
        email,
        picture,
      },
    });
    let auxiliar = await Users.findOne({
      where: { email },
      include: {
        model: Cart,
        attributes: ['id'],
        through: {
            attributes: [],
        },
    }
    })
    res.sendStatus(200);
  });

module.exports = { postUsers };
