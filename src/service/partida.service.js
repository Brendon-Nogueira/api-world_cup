const { partida } = require('../model/index')

const create =  async data => {

    await partida.create(data)
}

const getAll = async () => {
    return await partida.findAll()
   
    
}

const getPartidaById =  async partidaId => {
    return await partida.findAll({
        where: {
            id : partidaId
        }
    })
}

const update = async (partidaId, data) => {
    return await partida.update(data, {
        where: {
            id: partidaId
        }
    })
}

const remove = async partidaId => {
    return await partida.destroy({
        where:{
            id: partidaId
        }
    })
}

module.exports = {
    create,
    getAll,
    getPartidaById,
    update,
    remove
}