const { Guitar } = require("../models/model");
const { check, validationResult, body } = require("express-validator");

const vistaUno = (req, res) => {
  res.render("index", { title: "Express" });
};

const vistaGatitos = async (req, res) => {
  const gatitos = await Guitar.find();
  res.json({ gatitos });
};

const crearGatito = async (req, res) => {
  console.log(validationResult(req));
  console.log(req.body);

  const error = validationResult(req)
  if (error.isEmpty()) {
    const { Brand } = req.body;
    const kitty = new Guitar({ Brand });
    await kitty.save();
    res.json({ kitty, msg: "meow" });
  } else {
    res.json(error);
  }
};

const vistaUnGato = async (req, res) => {
  const kitty = await Guitar.findById(req.params.id);
  res.json({ kitty });
};

const editarGato = async (req, res) => {
  const { id } = req.params;
  const { Brand } = req.body;
  console.log(req.body);
  await Guitar.findByIdAndUpdate(id, { Brand });
  res.json({ id, Brand });
};

const eliminarGato = async (req, res) => {
  const kitty = await Guitar.findByIdAndDelete(req.params.id);
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
