const express = require('express')
const router = express.Router()
const controller = require('../controller/partidas.controller')

router.get('/', controller.getAll)
router.get('/:id', controller.getPartidaById)
router.get('/:date', controller.getPartidaByData)
router.get('/time/:partidaTime', controller.getPartidaByTime)
router.post('/', controller.create)
router.put('/:id', controller.update)
router.delete('/:id', controller.remove)

module.exports = router