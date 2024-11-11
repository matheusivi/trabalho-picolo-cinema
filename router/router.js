const express = require('express')
const router = express.Router()
const controllersAvaliacao = require('../controllers/homeController')



router.post('/', controllersAvaliacao.validarUsuario)
router.get('/', controllersAvaliacao.mostrarLogin)
router.get('/inicio', controllersAvaliacao.buscarHome)
router.get('/catalago/:catalago', controllersAvaliacao.buscarCatalago)
router.get('/:pagina', controllersAvaliacao.buscarPagina)

module.exports = router