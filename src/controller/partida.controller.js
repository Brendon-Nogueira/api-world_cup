const service = require('../service/partida.service')

const create = async (req, res) => {
  await  service.create(req.body)
    res.status(201).send('Jogo cadastrada com sucesso')
}

const getAll = async (req, res) => {
    res.send( await service.getAll())
}

const getJogoById = async (req, res) => {
    const jogoId = parseInt(req.params.id,10)
    res.send( await service.getSelecaoById(jogoId))
}

const update = async (req, res) => {
    const jogoId = req.params.id
     await service.update(jogoId, req.body)
    res.status(200).send('Partida atualizada com sucesso')
}

const remove = async (req, res) => {
    const jogoId = req.params.id
     await service.remove(jogoId)
    res.status(204).send('Jogo removido do torneio')
}

module.exports = {
    create,
    getAll,
    getJogoById,
    update,
    remove
}