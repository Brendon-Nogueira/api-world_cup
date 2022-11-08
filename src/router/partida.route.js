const express = require('express')
const router = express.Router()
const controller = require('../controller/partida.controller')

router.get('/', controller.getAll)
router.get('/:id', controller.getPartidaById)
router.get('/:dataPartida', controller.getPartidaByData)
router.get('/:partidaTime', controller.getPartidaByTime)
router.post('/', controller.create)
router.put('/:id', controller.update)
router.delete('/:id', controller.remove)

module.exports = router