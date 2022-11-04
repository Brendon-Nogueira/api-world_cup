const { selecao } = require('../model/index')

const create =  async data => {

    await selecao.create(data)
}

const getAll = async () => {
    return await selecao.findAll()
   
    
}

const getSelecaoById =  async selecaoId => {
    return await selecao.findAll({
        where: {
            id : selecaoId
        }
    })
}

const update = async (selecaoId, data) => {
    return await selecao.update(data, {
        where: {
            id: selecaoId
        }
    })
}

const remove = async selecaoId => {
    return await selecao.destroy({
        where:{
            id: selecaoId
        }
    })
}

module.exports = {
    create,
    getAll,
    getSelecaoById,
    update,
    remove
}