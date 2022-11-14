module.exports = (sequelize, DataTypes) => {
    const Partidas = sequelize.define('partidas', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        time_m: DataTypes.STRING,
        time_v: DataTypes.STRING,
        data_partida: DataTypes.DATE,
        placar_mandante: DataTypes.INTEGER,
        placar_visitante : DataTypes.INTEGER

    }, {
        timestamps: false,
        freezeTableName: true
    })

    return Partidas
}