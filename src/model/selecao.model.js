module.exports = (sequelize, DataTypes) => {
    const Selecao = sequelize.define('selecao', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataTypes.STRING,
        cor_uniforme: DataTypes.STRING,
        fundacao: DataTypes.STRING
    }, {
        timestamps: false,
        freezeTableName: true
    })

    return Selecao
}