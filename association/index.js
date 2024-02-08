const userModel = require("../models/userModel");
const subCategoryModel = require("../models/admin/subCategoryModel");

const categoryModel = require("../models/admin/categoryModel");
const stateModel = require("../models/admin/stateModel");

const countryModel = require("../models/admin/countryModel");
const cityModel = require("../models/admin/cityModel");
const godModel = require("../models/admin/productModel");

const fileModel = require("../models/admin/fileModel");



// userModel.hasMany(categoryModel)
// relation between user and category
userModel.hasMany(categoryModel);
categoryModel.belongsTo(userModel)

// relation between user and sub-category
userModel.hasMany(subCategoryModel);
subCategoryModel.belongsTo(userModel);

// relation between category and sub-category
categoryModel.hasMany(subCategoryModel);
subCategoryModel.belongsTo(categoryModel);

// relation country between COUNTRY and USER
userModel.hasMany(countryModel);
countryModel.belongsTo(userModel);
// relation country between COUNTRY and USER

// relation between country and states
userModel.hasMany(stateModel);
stateModel.belongsTo(userModel);

countryModel.hasMany(stateModel);
stateModel.belongsTo(countryModel);
// relation between country and states

// city realation
countryModel.hasMany(cityModel);
cityModel.belongsTo(countryModel);

stateModel.hasMany(cityModel);
cityModel.belongsTo(stateModel);

userModel.hasMany(cityModel);
cityModel.belongsTo(userModel);
// city realation

userModel.hasMany(godModel);
godModel.belongsTo(userModel);

// file model
userModel.hasMany(fileModel);
fileModel.belongsTo(userModel);

godModel.hasMany(fileModel);
fileModel.belongsTo(godModel);




module.exports = {
    userModel,
    subCategoryModel,
    categoryModel,
    countryModel,
    stateModel,
    cityModel,
    godModel,
    fileModel
}