const employees = require('../models/funcionarios.json');
const fs = require('fs');

const getAllEmployees = (req, res) => {
    res.send(employees);
};

const getAgeEmployeeByID = (req, res) => {
    const id = req.params.id;
    const funcionario = employees.find((funcionario) => funcionario.id == id);

    res.send({
        nome: funcionario.nome,
        idade: funcionario.idade
    });
};

const postEmployee = (req, res) => {
    const { id, nome, idade, cargo } = req.body;
    employees.push({id, nome, idade, cargo});

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
    const deletedEmployee = employees.find((employee) => employees.id == id);
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

module.exports = {
    getAllEmployees,
    getAgeEmployeeByID, 
    postEmployee,
    deleteEmployee 
};