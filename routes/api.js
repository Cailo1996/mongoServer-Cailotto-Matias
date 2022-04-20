const express = require('express');
const router = express.Router(); 
const {vistaGatitos, crearGatito, vistaUnGato, editarGato, eliminarGato} = require('../controller/controller.js')
const {check, validationResult, body} = require('express-validator');


/* GET users listing. */
router.get('/ver', vistaGatitos);
router.post('/crear',[
    check("brand").not().isEmpty().withMessage("El campo marca es obligatorio"),
    check("model").not().isEmpty().withMessage("El campo modelo es obligatorio"),
    check("year").not().isEmpty().withMessage("El campo año es obligatorio"),
    check("color").not().isEmpty().withMessage("El campo color es obligatorio")
], crearGatito); 
router.get("/ver/:id", vistaUnGato)
router.put("/editar/:id", editarGato)
router.delete("/eliminar/:id", eliminarGato)

module.exports = router;
