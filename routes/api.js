const express = require('express');
const router = express.Router(); 
const {vistaGatitos, crearGatito, vistaUnGato, editarGato, eliminarGato} = require('../controller/controller.js')
const {check, validationResult, body} = require('express-validator');


/* GET users listing. */
router.get('/ver', vistaGatitos);
router.post('/crear',[
    check("name").not().isEmpty().withMessage("El nombre es requerido")
], crearGatito);
router.get("/ver/:id", vistaUnGato)
router.put("/editar/:id", editarGato)
router.delete("/eliminar/:id", eliminarGato)

module.exports = router;
