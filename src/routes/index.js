const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const usersRouter = require('./users.js') 

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(usersRouter);

module.exports = router;
