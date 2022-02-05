const { Product, Categories } = require('../../db.js');


const updateProductAdm = async (req, res, next) => {
    
    const { name, ProductId, img, price, description, additionalInformation, stock, categories } = req.body;

    let category = categories[0];
    
    try {

        let productUpdate = await Product.findOne(
            { 
                where: { ProductId },
                include: { 
                    model: Categories,
                    attributes: ["CategoriesId"],
                    through: {
                        attributes: []
                    }
                }
            }
        );
        

        const addCategoryById = await Categories.findOne(
            {
                where: { name: category }
            }
        );

        // ELIMINAR RELACIONES:
        productUpdate.removeCategories(productUpdate.categories[0].CategoriesId);

        
        productUpdate.name = name
        productUpdate.img = img
        productUpdate.price = price
        productUpdate.description = description
        productUpdate.additionalInformation = additionalInformation
        productUpdate.stock = stock
        productUpdate.addCategories(addCategoryById)
        
        
        await productUpdate.save()
 
        res.json(productUpdate)

    } catch (error) {
        next(error);
    }
};


module.exports = { updateProductAdm };
