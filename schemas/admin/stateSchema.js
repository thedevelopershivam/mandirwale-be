const Sequelize = require("sequelize");
const countryModel = require("../../models/admin/countryModel");

const countrySchema = {
    state: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    countryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }

}
module.exports = countrySchema;