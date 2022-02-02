const { Users, Cart } = require("../../db");


const getActualUser = ("/", async (req, res) => {
  
  const { email } = req.params;
    
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
    console.log(error)
  
  }
   
});


module.exports = { getActualUser };