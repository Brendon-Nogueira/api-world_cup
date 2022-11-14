const { STRING } = require('sequelize')
const service = require('../service/partidas.service')

const create = async (req, res) => {
  await  service.create(req.body)
    res.status(200).send('Jogo cadastradao com sucesso')
}

const getAll = async (req, res) => {
    const lista = await service.getAll()
    res.send(lista)
}

const getPartidaById = async (req, res) => {
    const partidaId = parseInt(req.params.id,10)
    res.send( await service.getPartidaById(partidaId))
}

const getPartidaByTime = async(req, res) =>{
    const partidaTime = STRING(req.params.STRING)
    res.send(await service.getPartidaByTime(partidaTime))
   
}

const getPartidaByData = async(req,res) =>{
    const dataPartida = STRING(req.params.date)
    res.send(await service.getPartidaByData(dataPartida))
}

const update = async (req, res) => {
    const partidaId = req.params.id
     await service.update(partidaId, req.body)
    res.status(200).send('Jogo atualizado com sucesso')
}

const remove = async (req, res) => {
    const partidaId = req.params.id
     await service.remove(partidaId)
    res.status(204).send('Jogo removido do torneio')
}

module.exports = {
    create,
    getAll,
    getPartidaById,
    getPartidaByTime,
    getPartidaByData,
    update,
    remove
}