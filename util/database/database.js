const Sequelize = require("sequelize");

// const database = process.env.DATABASE_NAME;
// const username = process.env.USERNAME_USERNAME;
// const password = process.env.USERNAME_PASSWORD;
// const host = process.env.USERNAME_HOST;
// const dbType = process.env.USERNAME_TYPE;

const sequelize = new Sequelize("mandirwale", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
