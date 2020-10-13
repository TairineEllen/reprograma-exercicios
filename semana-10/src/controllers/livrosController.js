const books = require('../models/livros.json');
const fs = require('fs');

const getAllBooks = (req, res) => {
    res.send(books);
};

const getAllBooksInStock = (req, res) => {
    const booksInStock = books.filter((book) => book.emEstoque);
    res.send(booksInStock);
};

let booksOfPublisher = [];
const getBooksByPublisher = (req, res) => {
    const publishers = [];
    const editoras = books.map((publisher) => publisher.editora).forEach((publisher) => {
        if (publishers.indexOf(publisher) === -1) {
            publishers.push(publisher)
        };
    });
        
    booksOfPublisher = publishers.map((publisher) => ({
        editora: publisher,
        livros: books.filter((book) => book.editora == publisher).map((book) => ({
            id: book.id,
            titulo: book.titulo,
            autoria: book.autoria,
            emEstoque: book.emEstoque
        }))
    }));
    res.send(booksOfPublisher);
};

const postBook = (req, res) => {
    const id = employees.length + 1;
    const { titulo, autoria, editora, emEstoque } = req.body;
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
            return res.status(424).send({message: err});
        };
        console.log('Arquivo atualizado com sucesso');
    });
    res.send(books);
};

const updateBookWithPut = (req, res) => {
    const id = req.params.id;

    try {
        const updatedInfos = req.body;
        const bookToBeUpdated = books.find((book) => book.id == id);
        const index = books.indexOf(bookToBeUpdated);

        books.splice(index, 1, updatedInfos);

        fs.writeFile('./src/models/livros.json', JSON.stringify(books), 'utf-8', function(err) {
            if (err) {
                return res.status(424).send({ message: err });
            };
        });
       
        res.status(200).send(books);

    } catch (err) {
        return res.status(424).send({ message: err });
    };
};

const updatedBookWithPatch = (req, res) => {
    const id = req.params.id;

    try {
        const updatedInfos = req.body;
        const bookToBeUpdated = books.find((book) => book.id == id);

        Object.keys(updatedInfos).forEach((key) => {
            bookToBeUpdated[key] = updatedInfos[key];
        });

        fs.writeFile('./src/models/livros.json', JSON.stringify(books), 'utf-8', function(err) {
            if (err) {
                return res.status(424).send({ message: err });
            };
        });
        res.status(200).send(books);

    } catch (err) {
        return res.status(424).send({ message: err });
    };
};

module.exports = {
    getAllBooks,
    getAllBooksInStock,
    getBooksByPublisher, 
    postBook,
    deleteBook,
    updateBookWithPut,
    updatedBookWithPatch
};