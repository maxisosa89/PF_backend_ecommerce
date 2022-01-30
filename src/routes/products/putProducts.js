const { Product, Categories } = require('../../db.js');


const updateProductAdm = async (req, res, next) => {
    
    const { name, ProductId, img, price, description, additionalInformation, stock } = req.body;

    try {
            
        let productUpdate = await Product.findOne(
            { 
                where: { ProductId }
            }
        );
        
        productUpdate.name = name
        productUpdate.img = img
        productUpdate.price = price
        productUpdate.description = description
        productUpdate.additionalInformation = additionalInformation
        productUpdate.stock = stock
        
        
        await productUpdate.save()

        res.json("¡Actualizado!")

    } catch (error) {
        next(error);
    }
};


module.exports = { updateProductAdm };
