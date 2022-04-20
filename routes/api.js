const express = require("express");
const router = express.Router();
const {
  vistaGuitarras,
  crearGuitarra,
  vistaUnaGuitarra,
  editarGuitarra,
  eliminarGuitarra,
} = require("../controller/controller.js");
const { check, validationResult, body } = require("express-validator");

/* GET users listing. */
router.get("/ver", vistaGuitarras);

router.get("/buscar",
[
    check("id").isMongoId().withMessage("El id solicitado no existe")
],
vistaUnaGuitarra);

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
router.delete("/eliminar/:id", eliminarGuitarra);

module.exports = router;
