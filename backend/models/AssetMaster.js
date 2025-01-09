const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const AssetMaster = sequelize.define(
  "AssetMaster",
  {
    asset_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    asset_type: {
      type: DataTypes.STRING(40),
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING(40),
      allowNull: true,
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "asset_master", // Use the actual table name in your database
    timestamps: false, // Disable createdAt and updatedAt if not present in your table
  }
);

module.exports = AssetMaster;
