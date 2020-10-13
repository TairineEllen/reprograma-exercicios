const employees = require('../models/funcionarios.json');
const fs = require('fs');

const getAllEmployees = (req, res) => {
    res.send(employees);
};

const getAgeEmployeeByID = (req, res) => {
    const id = req.params.id;
    const funcionario = employees.find((funcionario) => funcionario.id == id);
    const data = funcionario.dataDeNascimento.split('/');
    const age = parseInt(2020) - parseInt(data[2]);
    
    res.send({
        nome: funcionario.nome,
        idade: age
    });
};

const postEmployee = (req, res) => {
    const id = employees.length + 1;
    const { nome, dataDeNascimento, cargo } = req.body;
    employees.push({id, nome, dataDeNascimento, cargo});

    fs.writeFile('./src/models/funcionarios.json', JSON.stringify(employees), 'utf-8', function(err) {
        if (err) {
            return res.status(404).send({message: err});
        };
        console.log('Arquivo atualizado com sucesso');
    });
    res.status(201).send(employees);
};

const deleteEmployee = (req, res) => {
    const id = req.params.id;
    const deletedEmployee = employees.find((employee) => employee.id == id);
    const index = employees.indexOf(deletedEmployee);
    employees.splice(index, 1);

    fs.writeFile('./src/models/funcionarios.json', JSON.stringify(employees), 'utf-8', function(err) {
        if (err) {
            return res.status(404).send({message: err});
        };
        console.log('Arquivo atualizado com sucesso');
    });
    res.send(employees);
};

const updateEmployeeWithPut = (req, res) => {
    const id = req.params.id;

    try {
        const updatedInfos = req.body;
        const employeeToBeUpdated = employees.find((employee) => employee.id == id);
        const index = employees.indexOf(employeeToBeUpdated);

        employees.splice(index, 1, updatedInfos);

        fs.writeFile('./src/models/funcionarios.json', JSON.stringify(employees), 'utf-8', function(err) {
            if (err) {
                return res.status(424).send({ message: err });
            };
        });
       
        res.status(200).send(employees);

    } catch (err) {
        return res.status(424).send({ message: err });
    };
};

module.exports = {
    getAllEmployees,
    getAgeEmployeeByID, 
    postEmployee,
    deleteEmployee,
    updateEmployeeWithPut 
};