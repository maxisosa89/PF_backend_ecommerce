const router = require("express").Router();
const { Users } = require("../../db");

const putUser = async (req, res) => {
  const { email, name, address, cp, state } = req.body;
  try {
    let toEdit = await Users.findOne({ where: { email } });
    toEdit.name = name;
    toEdit.address = address;
    toEdit.cp = cp;
    toEdit.state = state;
    await toEdit.save();
    res.json(toEdit);
  } catch (error) {
    res.json(error);
  }
};

module.exports = { putUser };