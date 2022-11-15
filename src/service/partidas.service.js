const { partidas } = require('../model/index')
const { Op, where } = require('sequelize')



const create =  async data => {
    await partidas.create(data)
}

const getAll = async () => {
    return await partidas.findAll()   
}

const getPartidaById =  async partidaId => {
    return await partidas.findAll({
        where: {
            id : partidaId
        }
    })
}

const getPartidaByTime = async partida =>{
    return await partidas.findAll({
        where:{
            [Op.or] : [
                {time_m : partida},
                {time_v : partida}
            ]
        
        }
    })
}

const getPartidaByData = async (dataPartida) =>{
    return await partidas.findAll(dataPartida,{
     where: {
        dataPartida :{
            [Op.gte]: new Date(),
            [Op.lte]: new Date(Date.now() + 24 * 60 * 60 * 1000)
        }
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