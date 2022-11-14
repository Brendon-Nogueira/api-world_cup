const { partida } = require('../model/index')
const { Op } = require('sequelize')

const create =  async data => {
    await partidas.create(data)
}

const getAll = async () => {
    return await partidas.findAll()   
}

const getPartidaById =  async partidaId => {
    return await partidaId.findAll({
        where: {
            id : partidaId
        }
    })
}

const getPartidaByTime = async partida =>{
    return await partidas.findAll({
        where:{
            [Op.pr] : [
                {time_m : partidas},
                {time_v : partidas}
            ]
        
        }
    })
}

const getPartidaByData = async (dataPartida) =>{
    return await partidas.findAll({
        where : {
             dataPartida : partidas
        }
    })
}

const update = async (partidaId, data) => {
    return await partidas.update(data, {
        where: {
            id: partidaId
        }
    })
}

const remove = async partidaId => {
    return await partidas.destroy({
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