const { Product, Reviews }=require('../../db');

const GetReviews = async(req, res, next)=> {

    try {
        
        const { ProductId } = req.params;
        // console.log('idback :>> ', id);
        //busca si existe el id de producto
        const prod = await Product.findByPk(ProductId)
        // console.log('prod.name :>> ', prod.name);
        //arrojara un mensaje si no existe el producto
        if (!prod) {
            res.status(404).json({
                message:"No existe producto"
            })
        }

        //busca todos los reviews con el id producto
        const revie = await Reviews.findAll({
            where:{
                productIdProduct: prod.ProductId
            }
        })
    
        res.json(revie)

    } catch (error) {
        next(error)
    }
}



module.exports={
    GetReviews
}