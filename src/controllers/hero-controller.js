const mongoose = require("mongoose");
const Hero = mongoose.model("Hero");

exports.get = (req, res, next) => {
  Hero.find({})
    .then(data => {
      res.status(200).send(data);
    })
    .catch(e => {
      res.status(400).send(e);
    });
};

exports.post = (req, res, next) => {
  var hero = new Hero(req.body);
  hero
    .save()
    .then(x => {
      res.status(201).send(req.body);
    })
    .catch(e => {
      res.status(400).send({ message: "Erro ao Cadastrar o Heroi", data: e });
    });
};

exports.put = (req, res, next) => {
  const id = req.params.id;
  res.status(201).send({
    id: id,
    item: req.body
  });
};

exports.del = (req, res, next) => {
  res.status(202).send(req.body);
};
