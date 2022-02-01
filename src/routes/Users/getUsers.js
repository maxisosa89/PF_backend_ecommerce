const { Users } = require('../../db');


const getUsers = ("/", async (req, res, next) => {

    try {
        const allUsers = await Users.findAll();
        
        res.json(allUsers);
    
    } catch (error) {
        next(error);
    }

});

module.exports = { getUsers };