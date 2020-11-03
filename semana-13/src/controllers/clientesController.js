const clientes = require('../models/clientes');

const getAll = (req, res) => {
  clientes.find((err, clientes) => {
    err ? res.status(424).send({ message: err.message }) : res.status(200).send(clientes);
  });
};

const getCompradores = (req, res) => {
  clientes.find({ comprou: true }, (err, clientes) => {
    err ? res.status(424).send({ message: err.message })
      : res.status(200).send(clientes.map(cliente => ({
        nome: cliente.nome,
        email: cliente.email
      }))
      );
  });
};

const getByCpf = (req, res) => {
  console.log("getByCpf");
  res.status(200).send("ok");
};

const postCliente = (req, res) => {

  let cliente = new clientes(req.body);
  cliente.save(err => {
    err ? res.status(424).send({ message: err.message })
      : res.status(201).send({
        status: 'TRUE',
        message: 'Cliente incluído(a) com sucesso'
      });
  });
};

module.exports = {
  getAll,
  getCompradores,
  getByCpf,
  postCliente
}
