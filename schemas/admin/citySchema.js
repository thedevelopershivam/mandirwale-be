const Sequelize = require("sequelize");

const citySchema = {
    city: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    stateId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    countryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }

}

module.exports = citySchema;