const { Product } = require('../../db.js');


const putProducts = async (req, res, next) => {
    
    const { name, img, price, description, additionalInformation, stock, categories } = req.body;
    const { ProductId } = req.params;

    try {

        const infoUpdateProduct = {
            name: name,
            img: img,
            price: price,
            description: description,
            additionalInformation: additionalInformation,
            stock: stock,
        };

        const productById = await Product.findOne({where:{ProductId}});

        // productById
        // ? await productById.update({ categories: categories })
        // : console.log("No se ha podido relacionar el producto con la categoria");

        productById
        ? res.send(await productById.update(infoUpdateProduct))
        : res.send("No se ha podido actualizar el producto");


    } catch (error) {
        next(error);
    }
};


module.exports = { 
    putProducts 
};
