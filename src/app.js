const express = require("express");
const cors = require("cors");
const routesEmployee = require("./routes/employeeRoutes.js");
const routesClass = require("./routes/classRoutes.js");
const app = express();
app.use(express.json());
app.use(cors());

app.use(routesEmployee);
app.use(routesClass);

app.listen(3333);