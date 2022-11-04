const service = require('../service/selecao.service')

const create = async (req, res) => {
  await  service.create(req.body)
    res.status(201).send('Seleção cadastrada com sucesso')
}

const getAll = async (req, res) => {
    res.send( await service.getAll())
}

const getSelecaoById = async (req, res) => {
    const selecaoId = parseInt(req.params.id, 10)
    res.send( await service.getSelecaoById(selecaoId))
}

const update = async (req, res) => {
    const selecaoId = req.params.id
     await service.update(selecaoId, req.body)
    res.status(200).send('Seleção atualizada com sucesso')
}

const remove = async (req, res) => {
    const selecaoId = req.params.id
     await service.remove(selecaoId)
    res.status(204).send('Seleção removida do torneio')
}

module.exports = {
    create,
    getAll,
    getSelecaoById,
    update,
    remove
}