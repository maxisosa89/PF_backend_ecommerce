const { Users, Cart } = require("../../db");


const getActualUser = ("/", async (req, res, next) => {
  
  const { email } = req.params;
  // getUser:
  try {
    
    let actualUser = await Users.findOne(
      {
        where: { email },
        include: {
          model: Cart,
          attributes: ['CartId', 'user', 'amount', 'productCart', 'status'],
          through: { attributes: [] },
        }
      }
    )
      
    res.status(200).json(actualUser);
    
  } catch (error) {
    next(error);
  } 
   
});


module.exports = { getActualUser };