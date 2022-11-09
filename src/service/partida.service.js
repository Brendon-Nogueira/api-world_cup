const { partida } = require('../model/index')
const { Op } = require('sequelize')

const create =  async data => {
    await partida.create(data)
}

const getAll = async () => {
    return await partida.findAll()   
}

const getPartidaById =  async partidaId => {
    return await partidaId.findAll({
        where: {
            id : partidaId
        }
    })
}

const getPartidaByTime = async partida =>{
    return await partida.findAll({
        where:{
            [Op.pr] : [
                {time_m : partida},
                {time_v : partida}
            ]
        
        }
    })
}

const getPartidaByData = async (dataPartida) =>{
    return await partida.findAll({
        where : {
             dataPartida : partida
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
    getPartidaByTime,
    getPartidaByData,
    update,
    remove
}