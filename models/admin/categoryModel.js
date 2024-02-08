
const sequelize = require("../../util/database/database");
const Category = require("../../schemas/admin/categorySchema");
const userModel = require("../../models/userModel");

const categoryModel = sequelize.define("category", Category, {
    timestamps: false
});

module.exports = categoryModel;