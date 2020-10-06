const employees = require('../models/funcionarios.json');
const fs = require('fs');

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

module.exports = { 
    postEmployee 
};