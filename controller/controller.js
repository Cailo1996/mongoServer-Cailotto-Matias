const { Guitar } = require("../models/model");
const { check, validationResult, body } = require("express-validator");
const axios = require("axios");

const vistaUno = (req, res) => {
  res.render("index", { title: "Express" });
};

const vistaGuitarras = async (req, res) => {
  const Guitarras = await Guitar.find();
  res.json({ Guitarras });
};

const crearGuitarra = async (req, res) => {
  console.log(validationResult(req));
  console.log(req.body);
  const error = validationResult(req);
  if (error.isEmpty()) {
    const { brand, model, year, color } = req.body;
    const Guitarra = new Guitar({ brand, model, year, color });
    await Guitarra.save();
    res.json({ Guitarra, msg: "Traoaaaan" });
  } else {
    res.json(error);
  }
};

const vistaUnaGuitarra = async (req, res) => {
  console.log(validationResult(req));
  console.log(req.body);
  const error = validationResult(req);
  if (error.isEmpty()) {
    const Guitarra = await Guitar.findById(req.params.id);
    res.json({ Guitarra });
  } else {
    res.json(error);
  }
};

const editarGuitarra = async (req, res) => {
  console.log(validationResult(req));
  console.log(req.body);
  const error = validationResult(req);
  if (error.isEmpty()) {
    const { id } = req.params;
    const { brand, model, year, color } = req.body;
    console.log(req.body);
    await Guitar.findByIdAndUpdate(id, { brand, model, year, color });
    res.json({ msg: "Guitarra editada", id, brand, model, year, color });
  } else {
    res.json(error);
  }
};

const eliminarGuitarra = async (req, res) => {
  console.log(validationResult(req));
  console.log(req.body);
  const error = validationResult(req);
  if (error.isEmpty()) {
    const Guitarra = await Guitar.findByIdAndDelete(req.body.id);
    res.json({ msg: "Guitarra eliminada" });
  } else {
    res.json(error);
  }
};

const consultaAxios = async (req, res) => {
  const resultado = await axios
    .get("https://pokeapi.co/api/v2/pokemon/155", { timeout: 10000 })
    .catch((err) => {
      err.origin = "Error Getting Pokemon";
      throw err;
    });
  console.log(resultado.data);
  res.json(resultado.data.types);
};

module.exports = {
  vistaUno,
  crearGuitarra,
  vistaGuitarras,
  vistaUnaGuitarra,
  editarGuitarra,
  eliminarGuitarra,
  consultaAxios,
};
