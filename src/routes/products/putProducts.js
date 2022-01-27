const { Product, Categories } = require('../../db.js');


const putProducts = async (req, res) => {
    const { name, img, price, description, aditionalInformation, stock, categories } = req.body

    try {

        const infoUpdateProduct = {
            name: name,
            img: img,
            price: price,
            description: description,
            aditionalInformation: aditionalInformation,
            stock: stock,
        };

    } catch (error) {
        res.json({ error });
    }
};


module.exports = { putProducts };
