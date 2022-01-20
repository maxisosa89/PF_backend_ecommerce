const router = require("express").Router();
const { Users } = require("../db");

router.post("/", async (req, res) => {
  const { name, picture, email } = req.body;
  let accountCreated = await Users.findOrCreate({
    where: {email},
    defaults: {
      name, email, picture
    }
  });
  res.sendStatus(200);
});

module.exports = router;
