const { Cart } = require("../../db");


const UpdateCardAdmin = async (req, res, next) => {

    const { CartId, status } = req.body

    try {

        let edit = await Cart.findOne(
            { 
                where: { CartId } 
            }
        );


        if(status === "paid") {
            
            edit.status = "paid"
        
        } else if(status === "dispatched") {

            edit.status = "dispatched"
        
        } else if(status === "delivered") {
            
            edit.status = "delivered"
        };

        
        await edit.save();
        res.json(edit);

        
    } catch (error) {
        next(error);
    }

};


module.exports = { UpdateCardAdmin };