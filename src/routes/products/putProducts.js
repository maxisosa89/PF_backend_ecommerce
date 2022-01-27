const { Product } = require('../../db.js');


const putProducts = async (req, res) => {
    
    const { name, img, price, description, aditionalInformation, stock, categories } = req.body;
    const { id } = req.params;

    try {

        const infoUpdateProduct = {
            name: name,
            img: img,
            price: price,
            description: description,
            aditionalInformation: aditionalInformation,
            stock: stock,
        };

        const productById = await Product.findByPk(id);

        productById
        ? await productById.update({ categories: categories })
        : console.log("No se ha podido relacionar el producto con la categoria");

        productById
        ? res.send(await productById.update(infoUpdateProduct))
        : res.send("No se ha podido actualizar el producto");


    } catch (error) {
        res.json({ error });
    }
};


module.exports = { 
    putProducts 
};
