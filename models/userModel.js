const userSchema = require("../schemas/userSchema");
const sequelize = require("../util/database/database");
const Category = require("../models/admin/categoryModel");
const bcrypt = require("bcrypt");

const userModel = sequelize.define("user", userSchema, {
  hooks: {
    beforeCreate: async (user, options) => {
      if (user.password !== user.confirmPassword) {
        throw new Error("Passwords do not match.");
      }

      const encPass = await bcrypt.hash(user.password, 12);
      user.password = encPass;

      delete user.dataValues.confirmPassword;
      delete user.confirmPassword;
    },
  },
});

module.exports = userModel;
