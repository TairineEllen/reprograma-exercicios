const tarefas = require('../models/tarefas');
const SECRET = process.env.SECRET;
const jwt = require('jsonwebtoken');

const getAll = (req, res) => {
  const authHeader = req.get('authorization');

  if (!authHeader) {
    return res.status(401).send('Header não encontrado');
  };

  const token = authHeader.split(' ')[1];

  jwt.verify(token, SECRET, err => {
    if (err) {
      return res.status(403).send('Token inválido');
    };

    tarefas.find((err, tarefas) => {
      if (err) {
        return res.status(424).send({ message: err.message });
      } else {
        return res.status(200).send(tarefas);
      };
    });
  });
};

const getById = (req, res) => {
  const id = req.params.id;
  const authHeader = req.get('authorization');

  if (!authHeader) {
    return res.status(401).send('Header não encontrado');
  };

  const token = authHeader.split(' ')[1];

  jwt.verify(token, SECRET, err => {
    if (err) {
      return res.status(403).send('Token inválido');
    };

    tarefas.find({ id }, (err, tarefa) => {
      if (err) {
        return res.status(424).send({ message: err.message });
      } else {
        return res.status(200).send(tarefa);
      };
    });
  });
};

const postTarefa = (req, res) => {
  const authHeader = req.get('authorization');

  if (!authHeader) {
    return res.status(401).send('Header não encontrado');
  };

  const token = authHeader.split(' ')[1];

  jwt.verify(token, SECRET, err => {
    if (err) {
      return res.status(403).send('Token inválido');
    };

    let tarefa = new tarefas(req.body);

    tarefa.save(err => {
      if (err) {
        return res.status(424).send({ message: err.message });
      };
      return res.status(201).send(tarefa);
    });
  });
};

const deleteTarefa = (req, res) => {
  const id = req.params.id;

  const authHeader = req.get('authorization');

  if (!authHeader) {
    return res.status(401).send('Header não encontrado');
  };

  const token = authHeader.split(' ')[1];

  jwt.verify(token, SECRET, err => {
    if (err) {
      return res.status(403).send('Token inválido');
    };

    tarefas.find({ id }, (err, tarefa) => {
      if (tarefa.length > 0) {
        tarefas.deleteOne({ id }, err => {
          if (err) {
            return res.status(424).send({ message: err.message });
          };
          return res.status(200).send('Tarefa deletada com sucesso');
        });
      } else {
        return res.status(404).send('Tarefa não encontrada');
      };
    });
  });
};

const deleteTarefaConcluida = (req, res) => {
  const authHeader = req.get('authorization');

  if (!authHeader) {
    return res.status(401).send('Header não encontrado');
  };

  const token = authHeader.split(' ')[1];

  jwt.verify(token, SECRET, err => {
    if (err) {
      return res.status(403).send('Token inválido');
    };

    tarefas.find({ concluido: true }, (err, tarefa) => {
      if (tarefa.length > 0) {
        tarefas.deleteMany({ concluido: true }, err => {
          if (err) {
            return res.status(424).send({ message: err.message });
          };
          return res.status(200).send('Tarefa(s) deletada(s) com sucesso');
        });
      };
    });
  });
};

const putTarefa = (req, res) => {
  const id = req.params.id;

  const authHeader = req.get('authorization');

  if (!authHeader) {
    return res.status(401).send('Header não encontrado');
  };

  const token = authHeader.split(' ')[1];

  jwt.verify(token, SECRET, err => {
    if (err) {
      return res.status(403).send('Token inválido');
    };
    tarefas.find({ id }, (err, tarefa) => {
      if (tarefa.length > 0){
        tarefas.updateOne({ id }, { $set: req.body }, err => {
          if (err) {
            return res.status(424).send({ message: err.message });
          };
          return res.status(200).send('Tarefa atualizada com sucesso');
        });
      } else {
        return res.status(404).send('Tarefa não encontrada');
      };
    });    
  }); 
};

module.exports = {
  getAll,
  getById,
  postTarefa,
  deleteTarefa,
  deleteTarefaConcluida,
  putTarefa
};
