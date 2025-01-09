const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const Employee = sequelize.define(
  "Employee",
  {
    emp_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    emp_name: {
      type: DataTypes.STRING(40),
      allowNull: true,
    },
    emp_dept: {
      type: DataTypes.STRING(40),
      allowNull: true,
    },
    emp_email: {
      type: DataTypes.STRING(75),
      allowNull: true,
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    tableName: "employees",
    timestamps: false,
  }
);

module.exports = Employee;
