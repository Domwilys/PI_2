const { Sequelize } = require('./db');
const db = require('./db');

const Sugest = db.sequelize.define('sugestoes', {
    id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    nome: {
        type: db.Sequelize.STRING,
        allowNull: false
    },

    email: {
        type: db.Sequelize.STRING,
        allowNull: false
    },

    sugestao: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Sugest;

//Sugest.sync({force: true});