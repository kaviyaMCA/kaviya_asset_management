const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const AssetDetails = sequelize.define(
  "AssetDetails",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    asset_ref_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    asset_model_no: {
      type: DataTypes.STRING(40),
      allowNull: true,
    },
    asset_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0 - Not Assigned, 1 - Assigned, 2 - Pending, 3 - Scrap",
    },
    asset_brand: {
      type: DataTypes.STRING(40),
      allowNull: true,
    },
    emp_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "asset_details", // Use the actual table name in your database
    timestamps: false, // Disable createdAt and updatedAt if not present in your table
  }
);

module.exports = AssetDetails;

/*const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // Adjust the path to your Sequelize instance

const AssetDetails = sequelize.define(
  'AssetDetails',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    asset_ref_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    asset_model_no: {
      type: DataTypes.STRING(40),
      allowNull: true,
    },
    asset_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: '0 - Not Assigned, 1 - Assigned, 2 - Pending, 3 - Scrap',
    },
    asset_brand: {
      type: DataTypes.STRING(40),
      allowNull: true,
    },
    emp_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: 'asset_details', // Use the actual table name in your database
    timestamps: false, // Disable createdAt and updatedAt if not present in your table
  }
);

module.exports = AssetDetails;
*/
