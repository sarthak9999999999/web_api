"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
var index_controller_1 = require("../controllers/index_controller");
router.get('/employee', index_controller_1.getEmployee); // get all employee sorted by name and salary from database
router.get('/employee/:id', index_controller_1.getEmployeebyId); //get users based on id saved in database
router.post('/employee', index_controller_1.createEmployee); //create new employee and save it to database from the API
router.put('/employee/:id', index_controller_1.updateEmployee); //update details of employee from the API to the database
router.delete('/employee/:id', index_controller_1.deleteEmployee); // delete an employee from the database from the API
exports.default = router;
//# sourceMappingURL=index.js.map