
const sequelize = require("../../util/database/database");
const addGodSchema = require("../../schemas/admin/addGodSchema");

const addGodModel = sequelize.define("godTable", addGodSchema);

module.exports = addGodModel;