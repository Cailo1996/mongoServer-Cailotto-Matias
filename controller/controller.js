const { Cat } = require("../models/model");
const { check, validationResult, body } = require("express-validator");

const vistaUno = (req, res) => {
  res.render("index", { title: "Express" });
};

const vistaGatitos = async (req, res) => {
  const gatitos = await Cat.find();
  res.json({ gatitos });
};

const crearGatito = async (req, res) => {
  console.log(validationResult(req));
  console.log(req.body);

  const error = validationResult(req)
  if (error.isEmpty()) {
    const { name } = req.body;
    const kitty = new Cat({ name });
    await kitty.save();
    res.json({ kitty, msg: "meow" });
  } else {
    res.json(error);
  }
};

const vistaUnGato = async (req, res) => {
  const kitty = await Cat.findById(req.params.id);
  res.json({ kitty });
};

const editarGato = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  console.log(req.body);
  await Cat.findByIdAndUpdate(id, { name });
  res.json({ id, name });
};

const eliminarGato = async (req, res) => {
  const kitty = await Cat.findByIdAndDelete(req.params.id);
  res.json({ msg: "murio", kitty });
};

module.exports = {
  vistaUno,
  crearGatito,
  vistaGatitos,
  vistaUnGato,
  editarGato,
  eliminarGato,
};
