const { partidas } = require('../model/index')
const { Op } = require('sequelize')
const { QueryTypes } = require('sequelize');


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
    return await partidas.findAll({
      const : dataPartida = sequelize.query(`SELECT * from partidas where ${dataPartida} = `, {type : QueryTypes.SELECT} )
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