const Sequelize = require("sequelize");
const database = require("../db.js");
const Employees = require("./employee.js");

const Classes = database.define("Classes", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING(150),
    allowNull: false
  }
});

Employees.hasMany(Classes, {
  foreignKey: "employee"
});
Classes.belongsTo(Employees, {
  foreignKey: "employee"
});

Classes.sync();
module.exports = Classes;