const router = require('express').Router();
const { Users } = require('../db.js');

// ruta users por busqueda x query para implementar al searchBar..
router.get('/users' , async (req, res) => {
	// const {name} = req.query;


	// const users = name? await Users.findAll({
	// 	where: {name},
	// 	through: {
	// 		atributes:[]
	// 	}
	// })

	// res.json(users);

	res.send([{
		id: 1,
		name: "James",
		last_name: "Doe",
		age: 31,
		mail: "jamesD@mail.com",
		user: "JamesD01",
		password: "user123"
	},
	{
		id: 2,
		name: "Mary",
		last_name: "Jane",
		age: 18,
		mail: "mjane@mail.com",
		user: "Maria_jane87",
		password: "user987"	
	}])
})





module.exports = router;