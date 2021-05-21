import {Router} from 'express'

const router = Router();

import {createEmployee, deleteEmployee, getEmployee, getEmployeebyId, updateEmployee} from '../controllers/index_controller'

router.get('/employee',getEmployee);        // get all employee sorted by name and salary from database
router.get('/employee/:id',getEmployeebyId) //get users based on id saved in database
router.post('/employee',createEmployee)      //create new employee and save it to database from the API
router.put('/employee/:id',updateEmployee)    //update details of employee from the API to the database
router.delete('/employee/:id',deleteEmployee)   // delete an employee from the database from the API


export default router;