const express = require("express");
const database = require("../db.js");
const classModel = require("../models/class.js");

const app = express();
app.use(express.json());

module.exports = {
    async Create(req, res) {
        try {
            await database.sync();
            const { name } = req.body;
            await classModel.create({
                name,
            });
            return res.status(201).send();
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    async ListAll(req, res) {
        try {
            await database.sync();
            const allClasses = await classModel.findAll();
            return res.status(201).send(allClasses);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    async ListPerRegistration(req, res) {
        try {
            await database.sync();
            const { employeeRegistration } = req.body;
            const getClasses = await classModel.findAll({
                where: {
                    employee: employeeRegistration,
                },
            });
            if (getClasses === null) {
                return res.status(400).json({
                    error: "Class not found!",
                });
            }
            return res.status(201).send(getClasses);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    async ListPerId(req, res) {
        try {
            await database.sync();
            const { id } = req.body;
            const getClass = await classModel.findByPk(id);
            if (getClass === null) {
                return res.status(400).json({
                    error: "Class not found!",
                });
            }
            return res.status(201).send(getClass);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    async DeleteClass(req, res) {
        try {
            await database.sync();
            const { id } = req.body;
            const getClass = await classModel.findByPk(id);
            if (getClass === null) {
                return res.status(400).json({
                    error: "Class not found!",
                });
            }
            await classModel.destroy({
                where: {
                    id,
                },
            });
            return res.status(200).send();
        } catch (error) {
            return res.status(400).json(error);
        }
    },
};
