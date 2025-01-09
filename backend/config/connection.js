const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("asset_management", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
