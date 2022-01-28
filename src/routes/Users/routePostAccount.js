const router = require("express").Router();
const {Users} = require("../../db");

const postUsers =
  ("/",
    async (req, res,next) => {
      try {
        let {name, picture, email} = req.body;
        let accountCreated = await Users.findOrCreate({
          where: {email},
          defaults:{
             name, 
             email, 
             picture, 
          },
        });
        res.status(200).json(accountCreated);
      } catch (e) {
        next(e)
      }

    });

module.exports = {
  postUsers
};