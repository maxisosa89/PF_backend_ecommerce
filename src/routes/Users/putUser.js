const router = require("express").Router();
const { Users } = require("../../db");

const putUser = async (req, res) => {
  const { email, name, address, cp, state, del } = req.body;
  try {
    console.log(req.body)
    let toEdit = await Users.findOne({ where: { email } });
    if (del){
      toEdit.active = false;
    }else {
      toEdit.name = name;
      toEdit.address = address;
      toEdit.cp = cp;
      toEdit.state = state;
    }
    await toEdit.save();
    res.json(toEdit);
  } catch (error) {
    res.json(error);
  }
};

module.exports = { putUser };