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
    const Viola = new Guitar({ brand, model, year, color });
    await Viola.save();
    res.json({ Viola, msg: "Traoaaaan" });
  } else {
    res.json(error);
  }
};

const vistaUnaGuitarra = async (req, res) => {
  const Viola = await Guitar.findById(req.params.id);
  res.json({ Viola });
};

const editarGuitarra = async (req, res) => {
  const { id } = req.params;
  const { brand, model, year, color } = req.body;
  console.log(req.body);
  await Guitar.findByIdAndUpdate(id, { brand, model, year, color });
  res.json({ id, brand, model, year, color });
};

const eliminarGuitarra = async (req, res) => {
  const Viola = await Guitar.findByIdAndDelete(req.params.id);
  res.json({ msg: "Corto Cuerdas", Viola });
};

module.exports = {
  vistaUno,
  crearGuitarra,
  vistaGuitarras,
  vistaUnaGuitarra,
  editarGuitarra,
  eliminarGuitarra,
};
