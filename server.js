const app = require("./app");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
// database
const Sequelize = require("sequelize");
const sequelize = require("./util/database/database");

// database
const associations = require("./association/index");

const PORT = process.env.PORT;
// { force: true }

sequelize
  .sync()
  .then((res) => {
    app.listen(PORT);
    console.log(`this app is running on: http://localhost:${PORT}`);
  })
  .catch((err) => console.log(err));

