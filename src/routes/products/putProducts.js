const { Product, Categories } = require('../../db.js');


const updateProductAdm = async (req, res, next) => {
    
    const { name, ProductId, img, price, description, additionalInformation, stock, categories } = req.body;

    
    try {
            
        let categoryUpdate = await Categories.findOne(
            {
                where: { categories: categories[0].name },
            }
        );


        let productUpdate = await Product.findOne(
            { 
                where: { ProductId }
            }
        );

        console.log(productUpdate)
        
        productUpdate.name = name
        productUpdate.img = img
        productUpdate.price = price
        productUpdate.description = description
        productUpdate.additionalInformation = additionalInformation
        productUpdate.stock = stock
        productUpdate.categories = categoryUpdate
        
        
        await productUpdate.save()

        res.json("¡Actualizado!")

    } catch (error) {
        next(error);
    }
};


module.exports = { updateProductAdm };
