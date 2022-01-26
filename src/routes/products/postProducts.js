const { Product, Categories } = require('../../db.js');


const postProducts = async (req, res) => {
  
  const { name, img, price, description, aditionalInformation, stock, categories } = req.body;
  
  try {
    
    const newProduct = await Product.create({
      name,
      img,
      price,
      description,
      aditionalInformation,
      stock,
    })

    res.json(newProduct);



    // for(let c = 0; c < categories.length; c++) {
    //   const [newProduct, created] = await Product.findOrCreate(
    //     {
    //       where: { name: name },
    //       defaults: { 
    //         name: name, 
    //         img: img, 
    //         price: price, 
    //         description: description, 
    //         aditionalInformation: aditionalInformation, 
    //         stock: stock 
    //       },
    //     }
    //   );

    //   const category = await Categories.findAll(
    //     { // Busco en la tabla las categorias:
    //       where: { name: categories[c] },
    //     }
    //   );

    //   newProduct.addCategory(category);
    
    // }
    
    // res.send({ success: "Product has been created" });
  
  } catch (error) {
    res.json({ error });

  }
};


module.exports = {
  postProducts,
};


// {
// 	"name": "Mi-Pac Peruvian Stripe Backpack",
// 	"img": [
// "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/17_4-370x497.jpg",
// "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/17_4-370x497.jpg",
// "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/17_4-370x497.jpg",
// "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/17_4-370x497.jpg",
// "https://ld-wp.template-help.com/woocommerce_59038/wp-content/uploads/2016/06/17_4-370x497.jpg"
// ],
// "price": 114,
// "description": "es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",
// "aditionalInformation": {
// 	"manufacturer": "DataTypes.STRING",
//           "material": "DataTypes.STRING",
//           "occasion": "DataTypes.STRING",
//           "fit": "DataTypes.STRING",
//           "lining_material": "DataTypes.STRING"
// },
// 	"stock": {
// 	"xs": 9,
// 	"s": 5,
// 	"m": 2,
// 	"l": 9,
// 	"xl": 2,
// 	"xxl": 4
// 	}
// }