const sequelize = require("../../util/database/database");
const subCategorySchema = require("../../schemas/admin/subCategorySchema");

const subCategory = sequelize.define("subCategory", subCategorySchema, {
    timestamps: false
});

module.exports = subCategory;

