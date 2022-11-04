module.exports = (sequelize, DataTypes) => {
    const Partida = sequelize.define('partida', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        selecao_1: DataTypes.STRING,
        selecao_2: DataTypes.STRING,
        data_partida: DataTypes.DATE,
        placar: DataTypes.STRING

    }, {
        timestamps: false,
        freezeTableName: true
    })

    return Partida
}