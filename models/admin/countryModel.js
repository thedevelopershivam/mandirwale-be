
const sequelize = require("../../util/database/database");
const countrySchema = require("../../schemas/admin/countrySchema");

const countryModel = sequelize.define("country", countrySchema, {
    timestamps: false
});

module.exports = countryModel;