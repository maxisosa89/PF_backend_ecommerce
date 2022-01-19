const router = require("express").Router();
const { Users } = require("../db");

router.post("/", async (req, res) => {
  const { name, picture, email } = req.body;
  let accountCreated = await Users.create({
    name,
    picture,
    email,
  });
  res.sendStatus(200);
});

module.exports = router;
