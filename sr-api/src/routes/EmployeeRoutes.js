const router = require('express').Router();
const EmployeeController = require('src/controller/EmployeeController.js');

router.route('/')
    .get(EmployeeController.getAllEmployees)
    .post(EmployeeController.addEmployee);

router.route('/:employeeID')
    .get(EmployeeController.getEmployee)
    .put(EmployeeController.updateEmployee)
    .delete(EmployeeController.deleteEmployee);

module.exports = router;