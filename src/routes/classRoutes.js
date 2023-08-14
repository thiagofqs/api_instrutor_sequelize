const express = require("express");
const routes = express.Router();
const controller = require("../controllers/classControllers.js");

routes.post("/register/class", controller.Create);

routes.get("/classes", controller.ListAll);

routes.get("/search/classes/registration", controller.ListPerRegistration);

routes.get("/search/class", controller.ListPerId);

routes.delete("/class", controller.DeleteClass);

module.exports = routes;
