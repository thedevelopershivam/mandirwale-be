const Sequelize = require("sequelize");
const validator = require("validator");

const userSchemas = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  role: {
    type: Sequelize.ENUM,
    values: ["admin", "superAdmin", "user", "employee"],
    defaultValue: "user",
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  photo: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    minLength: 8,
  },
  confirmPassword: {
    type: Sequelize.STRING,
    allowNull: false,
    minLength: 8,
  },
};

module.exports = userSchemas;
