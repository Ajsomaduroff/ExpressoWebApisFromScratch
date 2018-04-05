const express = require('express');
const apiRouter = express.Router();
const employeesRouter = require('./employees.js');
const menusRouter = require('./menus.js');

//for url including /employees, use employeesRouter
apiRouter.use('/employees', employeesRouter);
//for url including /menus, use menusRouter
apiRouter.use('/menus', menusRouter);

//makes apiRouter accessible to outside files. 
module.exports = apiRouter;
