const { Product, Categories } = require('../../db.js');


const updateProductAdm = async (req, res, next) => {
    
    const { name, ProductId, img, price, description, additionalInformation, stock, categories, del } = req.body;

    
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
        let actualCategories = []
        //console.log(productUpdate)
        productUpdate.categories.map((e) => {
            
            if (!categories.includes(e.name)){
                productUpdate.removeCategories(e)
            }else {
                actualCategories.push(e.name)
            }
        })
        categories.map(async(e) => {
            if(!actualCategories.includes(e)){
                const addCategoryById = await Categories.findOne(
                    {
                        where: { name: e }
                    }
                );
                productUpdate.addCategories(addCategoryById)
            }
        })

        /* const addCategoryById = await Categories.findOne(
            {
                where: { name: category }
            }
        ); */

        // ELIMINAR RELACIONES:
        /* productUpdate.removeCategories(productUpdate.categories[0].CategoriesId); */

        
        productUpdate.name = name
        productUpdate.img = img
        productUpdate.price = price
        productUpdate.description = description
        productUpdate.additionalInformation = additionalInformation
        productUpdate.stock = stock
        /* productUpdate.addCategories(addCategoryById) */
        if (del) {
            productUpdate.active = false
        }else {
            productUpdate.active = true
        }
        
        await productUpdate.save()
 
        res.json(productUpdate)

    } catch (error) {
        next(error);
    }
};


module.exports = { updateProductAdm };
