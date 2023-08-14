const express = require("express");
const { Op } = require("sequelize");
const database = require("../db.js");
const employeeModel = require("../models/employee.js");
const classModel = require("../models/class.js");

const app = express();
app.use(express.json());

module.exports = {
    async Create(req, res) {
        try {
            await database.sync();
            const { name, cpf, password, email, birthDate, cellPhone } =
                req.body;
            await employeeModel.create({
                name,
                cpf,
                password,
                email,
                birthDate,
                cellPhone,
            });
            return res.status(201).send();
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    async EmployeeToClass(req, res) {
        try {
            await database.sync();
            const { employeeRegistration, id } = req.body;
            const employee = await employeeModel.findByPk(employeeRegistration);
            const getClass = await classModel.findByPk(id);
            if (employee === null) {
                return res.status(400).json({
                    error: "Employee not found!",
                });
            } else if (getClass === null) {
                return res.status(400).json({
                    error: "Class not found!",
                });
            }
            console.log(employeeRegistration);
            getClass.employee = employeeRegistration;
            await getClass.save();
            return res.status(201).send(getClass);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    async ClassNull(req, res) {
        try {
            await database.sync();
            const { id } = req.body;
            const getClass = await classModel.findByPk(id);
            if (getClass === null) {
                return res.status(400).json({
                    error: "Class not found!",
                });
            }
            getClass.employee = null;
            await getClass.save();
            return res.status(201).send(getClass);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    async ListAll(req, res) {
        try {
            await database.sync();
            const employees = await employeeModel.findAll();
            return res.status(201).send(employees);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    async ListPerId(req, res) {
        try {
            await database.sync();
            const { employeeRegistration } = req.body;
            const employee = await employeeModel.findByPk(employeeRegistration);
            if (employee === null) {
                return res.status(400).json({
                    error: "Employee not found!",
                });
            }
            return res.status(201).send(employee);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    async ListPerName(req, res) {
        try {
            await database.sync();
            const { name } = req.body;
            const employee = await employeeModel.findAll({
                where: {
                    name: { [Op.like]: `%${name}%` },
                },
            });
            if (employee === "") {
                return res.status(400).json({
                    error: "Employee not found!",
                });
            }
            return res.status(201).send(employee);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    async ListPerCpf(req, res) {
        try {
            await database.sync();
            const { cpf } = req.headers;
            const employee = await employeeModel.findOne(cpf);
            if (employee === null) {
                return res.status(400).json({
                    error: "Employee not found!",
                });
            }
            return res.status(201).send(employee);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    async Update(req, res) {
        try {
            await database.sync();
            const { name, password, email, birthDate, cellPhone } = req.body;
            const { cpf, loginPassword } = req.headers;
            const employee = await employeeModel.findOne(cpf);
            if (loginPassword === employee.password && employee !== null) {
                employee.name = name;
                employee.password = password;
                employee.email = email;
                employee.birthDate = birthDate;
                employee.cellPhone = cellPhone;
                await employee.save();
                return res.status(201).send();
            } else {
                return res.status(400).json({
                    error: "Invalid login!",
                });
            }
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    async DeleteEmployee(req, res) {
        try {
            await database.sync();
            const { employeeRegistration } = req.body;
            const employee = await employeeModel.findByPk(employeeRegistration);
            if (employee === null) {
                return res.status(400).json({
                    error: "Employee not found!",
                });
            }
            await employeeModel.destroy({
                where: {
                    employeeRegistration,
                },
            });
            return res.status(200).send();
        } catch (error) {
            return res.status(400).json(error);
        }
    },
};
