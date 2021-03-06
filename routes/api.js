const express = require("express");
const router = express.Router();
const {
    consultaAxios,
  vistaGuitarras,
  crearGuitarra,
  vistaUnaGuitarra,
  editarGuitarra,
  eliminarGuitarra,
} = require("../controller/controller.js");
const { check, validationResult, body } = require("express-validator");
const { default: axios } = require("axios");

/* GET users listing. */
router.get("/ver", vistaGuitarras);

router.get(
  "/buscar/:id",
  [
    check("id")
      .isMongoId()
      .withMessage("El id solicitado no tiene el formato correcto"),
  ],
  vistaUnaGuitarra
);

router.post(
  "/crear",
  [
    check("brand")
      .not()
      .isEmpty()
      .withMessage("El campo marca no puede estar vacio"),
    check("model")
      .not()
      .isEmpty()
      .withMessage("El campo modelo no puede estar vacio"),
    check("year")
      .not()
      .isEmpty()
      .withMessage("El campo año no puede estar vacio"),
    check("color")
      .not()
      .isEmpty()
      .withMessage("El campo color no puede estar vacio"),
  ],
  crearGuitarra
);
router.put(
  "/editar/:id",
  [
    check("brand")
      .not()
      .isEmpty()
      .withMessage("El campo marca no puede estar vacio"),
    check("model")
      .not()
      .isEmpty()
      .withMessage("El campo modelo no puede estar vacio"),
    check("year")
      .not()
      .isEmpty()
      .withMessage("El campo año no puede estar vacio"),
    check("color")
      .not()
      .isEmpty()
      .withMessage("El campo color no puede estar vacio"),
  ],
  editarGuitarra
);
router.delete(
  "/eliminar",
  [check("id").isMongoId().withMessage("El id solicitado no existe")],
  eliminarGuitarra
);

router.get("/pokemon", consultaAxios);

module.exports = router;
