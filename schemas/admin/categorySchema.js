const Sequelize = require("sequelize");

const categorySchema = {
    category: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    file: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    processFile: {
        type: Sequelize.STRING,
        allowNull: true,
    }
}

module.exports = categorySchema;