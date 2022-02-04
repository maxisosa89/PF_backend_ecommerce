const { Product, Categories } = require('../../db.js');


const updateProductAdm = async (req, res, next) => {
    
    const { name, ProductId, img, price, description, additionalInformation, stock, categories } = req.body;
    
    try {

        categories.map(async (category) => {
            
            let categoryUpdate = await Categories.findOne(
                {
                    where: { 
                        name: category,
                        active: false
                    },
                }
            );

            categoryUpdate.active = true;
        
            await categoryUpdate.save();
        });
            

        let productUpdate = await Product.findOne(
            { 
                where: { ProductId }
            }
        );

        // console.log(productUpdate)
        
        productUpdate.name = name
        productUpdate.img = img
        productUpdate.price = price
        productUpdate.description = description
        productUpdate.additionalInformation = additionalInformation
        productUpdate.stock = stock
        
        
        
        await productUpdate.save()

        res.json(productUpdate)

    } catch (error) {
        next(error);
    }
};


module.exports = { updateProductAdm };
