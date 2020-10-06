const books = require('../models/livros.json');
const fs = require('fs');

const postBook = (req, res) => {
    const { id, titulo, autoria, editora, emEstoque } = req.body;
    books.push({id, titulo, autoria, editora, emEstoque});

    fs.writeFile('./src/models/livros.json', JSON.stringify(books), 'utf-8', function(err) {
        if (err) {
            return res.status(404).send({message: err});
        };
        console.log('Arquivo atualizado com sucesso');
    });
    res.status(201).send(books);
};

const deleteBook = (req, res) => {
    const id = req.params.id;
    const deletedBook = books.find((book) => books.id == id);
    const index = books.indexOf(deletedBook);
    books.splice(index, 1);

    fs.writeFile('./src/models/livros.json', JSON.stringify(books), 'utf-8', function(err) {
        if (err) {
            return res.status(404).send({message: err});
        };
        console.log('Arquivo atualizado com sucesso');
    });
    res.send(books);
};

module.exports = { 
    postBook,
    deleteBook
};