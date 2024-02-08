const Sequelize = require("sequelize");

const fileSchema = {
    file: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    processFile: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}
module.exports = fileSchema;