const { Guitar } = require("../models/model");
const { check, validationResult, body } = require("express-validator");

const vistaUno = (req, res) => {
  res.render("index", { title: "Express" });
};

const vistaGuitarras = async (req, res) => {
  const gatitos = await Guitar.find();
  res.json({ gatitos });
};

const crearGuitarra = async (req, res) => {
  console.log(validationResult(req));
  console.log(req.body);
  const error = validationResult(req)
  if (error.isEmpty()) {
    const { brand, model, year, color  } = req.body;
    const Guitarra = new Guitar({ brand, model, year, color });
    await Guitarra.save();
    res.json({ Guitarra, msg: "Traoaaaan" });
  } else {
    res.json(error);
  }
};

const vistaUnaGuitarra = async (req, res) => {
  const Guitarra = await Guitar.findById(req.body.id);
  res.json({ Guitarra });
};

const editarGuitarra = async (req, res) => {
  console.log(validationResult(req));
  console.log(req.body);
  const error = validationResult(req)
  if (error.isEmpty()) {
    const { id } = req.params;
    const { brand, model, year, color } = req.body;
    console.log(req.body);
    await Guitar.findByIdAndUpdate(id, { brand, model, year, color });
    res.json({ msg: "Guitarra editada", id, brand, model, year, color  });
} else {
  res.json(error);
}
};

const eliminarGuitarra = async (req, res) => {
  const Guitarra = await Guitar.findByIdAndDelete(req.params.id);
  res.json({ msg: "Corto Cuerdas", Guitarra });
};

module.exports = {
  vistaUno,
  crearGuitarra,
  vistaGuitarras,
  vistaUnaGuitarra,
  editarGuitarra,
  eliminarGuitarra,
};
