const Sequelize = require("sequelize");
const database = require("../db.js");

const Employees = database.define("Employees", {
  employeeRegistration: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING(150),
    allowNull: false
  },
  cpf: {
    type: Sequelize.STRING(15),
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING(10),
    allowNull: false
  },
  email: {
    type: Sequelize.STRING(150),
    allowNull: false,
    unique: true
  },
  birthDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  cellPhone: {
    type: Sequelize.STRING(15),
    allowNull: false
  }
});

Employees.sync();
module.exports = Employees;