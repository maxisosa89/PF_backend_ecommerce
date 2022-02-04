const { Product, Categories } = require('../../db.js');


const updateProducts = async (req, res, next) => {
  
  const { name, img, price, description, additionalInformation, stock, categories } = req.body;
  
  try {
    
    const [newProduct, created] = await Product.findOrCreate(
      {
        where: { name: name },
        defaults: {
          name,
          img,
          price,
          description,
          additionalInformation,
          stock
        }
      }
    );

    created && categories.map(async (c) => {
      let category = await Categories.findOne(
        {
          where: { name: c }
        }
      );

      newProduct.addCategory(category)

    });


    res.status(200).json(newProduct);
  
  } catch (error) {
    next( error );

  }

};


module.exports = { updateProducts };




/* JSON prueba para postman: post --> se guarda en la bd.
{
  "name": "Mi-Pac Peruvian Stripe Backpack",
  "img": [
    "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/17_4-370x497.jpg",
    "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/17_4-370x497.jpg",
    "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/17_4-370x497.jpg",
    "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/17_4-370x497.jpg",
    "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/17_4-370x497.jpg"
  ],
  "price": 114,
  "description": "This winter jacket sports all the characteristics native to colecction",
  "aditionalInformation": {
    "manufacturer": "Japan",
    "material": "Cotton",
    "occasion": "Evening & cocktail",
    "fit": "Comfort",
    "lining_material": "Nylon"
  },
  "stock": {
    "xs": 9,
    "s": 5,
    "m": 2,
    "l": 9,
    "xl": 2,
    "xxl": 4
  },
  "createdAt": "2022-01-26T20:36:36.430Z",
  "updatedAt": "2022-01-26T20:36:36.430Z",
  "categories": [
    {
      "name": "Women Clothing"
    },
    {
    "name": "Men Clothing"
    }
  ]
}
*/