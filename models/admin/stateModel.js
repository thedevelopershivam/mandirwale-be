
const sequelize = require("../../util/database/database");
const stateSchema = require("../../schemas/admin/stateSchema");

const stateModel = sequelize.define("state", stateSchema, {
    timestamps: false
});

module.exports = stateModel;