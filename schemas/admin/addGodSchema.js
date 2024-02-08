const Sequelize = require("sequelize");

const addGodSchema = {
    religion: {
        type: Sequelize.STRING,
        allowNull: false
    },
    categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    subCategoryId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    countryId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    stateId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    pinCode: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    mapLocation: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    details: {
        type: Sequelize.TEXT,
        allowNull: false
    }
}

module.exports = addGodSchema;