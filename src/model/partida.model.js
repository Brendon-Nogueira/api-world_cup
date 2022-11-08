module.exports = (sequelize, DataTypes) => {
    const Partida = sequelize.define('partida', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        time_m: DataTypes.STRING,
        time_v: DataTypes.STRING,
        data_partida: DataTypes.DATE,
        placar_mandante: DataTypes.STRING,
        placar_visitante : DataTypes

    }, {
        timestamps: false,
        freezeTableName: true
    })

    return Partida
}