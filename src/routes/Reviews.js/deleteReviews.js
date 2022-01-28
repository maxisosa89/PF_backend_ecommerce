const { Reviews } = require('../../db');

const DeleteReviews = async (req, res, next) =>{
    try {
        const {ReviewId} = req.params;
        const revi = await Reviews.findByPk(ReviewId);
        if (!revi) {
            res.status(404).json({
                message:"review eliminado con id" + ReviewId
            })
        };
        await revi.destroy()// eliminacion fisica;
        
        res.json(revi);
    } catch (error) {
        next(error)
    }
}

module.exports={
    DeleteReviews
}