const express = require("express");
const routes = express.Router();
const controller = require("../controllers/employeeControllers.js");

routes.post("/register/employee", controller.Create);

routes.patch("/register/employee/class", controller.EmployeeToClass);

routes.patch("/delete/employee/class", controller.ClassNull);

routes.get("/employees", controller.ListAll);

routes.get("/search/registration", controller.ListPerId);

routes.get("/search/cpf", controller.ListPerCpf);

routes.get("/search/name", controller.ListPerName);

routes.put("/update/employee", controller.Update);

routes.delete("/delete/employee", controller.DeleteEmployee);

module.exports = routes;