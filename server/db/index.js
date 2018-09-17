const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  database: "sephora",
  username: "hannahholzmann",
  password: null,
  dialect: "postgres"
});

module.exports = sequelize;
