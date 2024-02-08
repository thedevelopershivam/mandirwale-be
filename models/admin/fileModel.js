
const sequelize = require("../../util/database/database");
const fileSchema = require("../../schemas/admin/filesSchema");

const fileModel = sequelize.define("files", fileSchema, {
    timestamps: false
});

module.exports = fileModel;