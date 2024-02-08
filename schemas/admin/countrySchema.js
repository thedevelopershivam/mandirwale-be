const Sequelize = require("sequelize");

const countrySchema = {
    country: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}

module.exports = countrySchema;