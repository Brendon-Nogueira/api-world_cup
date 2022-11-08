const service = require('../service/partida.service')

const create = async (req, res) => {
  await  service.create(req.body)
    res.status(201).send('Jogo cadastrada com sucesso')
}

const getAll = async (req, res) => {
    res.send( await service.getAll())
}

const getPartidaById = async (req, res) => {
    const partidaId = parseInt(req.params.id,10)
    res.send( await service.getSelecaoById(partidaId))
}

const getPartidaByTime = async(req, res) =>{
    const partidaId = req.params.id
    await service.getPartidaByTime(partidaId, time_m, time_v, req.body)
    res.status(200).send('Todos os jogos')
}

const getPartidaByData = async(req,res) =>{
    const partidaId = req.params.id
    await service.getPartidaByData(partidaId, data_partida, req.body)
}
const update = async (req, res) => {
    const partidaId = req.params.id
     await service.update(partidaId, req.body)
    res.status(200).send('Partida atualizada com sucesso')
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