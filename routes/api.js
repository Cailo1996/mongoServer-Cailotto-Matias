const express = require('express');
const router = express.Router(); 
const {vistaGuitarras, crearGuitarra, vistaUnGato, editarGato, eliminarGato} = require('../controller/controller.js')
const {check, validationResult, body} = require('express-validator');


/* GET users listing. */
router.get('/ver', vistaGuitarras);
router.post('/crear',[
    check("brand").not().isEmpty().withMessage("El nombre es requerido")
], crearGuitarra);
router.get("/ver/:id", vistaUnGato)
router.put("/editar/:id", editarGato)
router.delete("/eliminar/:id", eliminarGato)

module.exports = router;
