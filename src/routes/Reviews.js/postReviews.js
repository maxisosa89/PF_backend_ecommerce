const { Product, User, Reviews }=require('../../db');

const PostReviews = async(req, res, next)=> {

    try {   
        let { ProductId } = req.params;
        let { UsersId, score, description,productIdProduct } = req.body;
        console.log('req.body :>> ', req.body);

        //busco si existe el producto por id
        let prod = await Product.findByPk(ProductId)
        //busco si existe el usuario por id
        let use = await User.findByPk(UsersId)
        //si no existe enviara un mensaje
        if (!prod) {
            res.status(404).json({
                message:'no existe producto'
            })
        }
        if (!use) {
            res.status(404).json({
                message:'no existe usuario'
            })
        }
        //creo un nuevo review
        let [newReview, created] = await Reviews.findOrCreate({
            where:{
                productIdProduct:ProductId,
                UsersId:UsersId
            },
            defaults:{
                score:score,
                description:description,
            }
        })

        res.status(200).json({created:created,newReview})

    } catch (error) {
        next(error)
    }
}

module.exports={
    PostReviews
}