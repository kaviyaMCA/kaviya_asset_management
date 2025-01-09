const db = require("../config/dbconfig");
const AssetDetails = require("../models/Assetdetails");

const getdetails = async (req, res) => {
  const apiResponse = {};
  try {
    const data = await AssetDetails.findAll();
    apiResponse.status = "Success";
    apiResponse["code"] = 200;
    apiResponse["data"] = data;
  } catch (err) {
    apiResponse["status"] = "error";
    apiResponse["code"] = 400;
    apiResponse["data"] = [];
    apiResponse["error"] = err;
  }
  res.json(apiResponse);
};

const get_by_status = async (req, res) => {
  const asset_status = req.body.asset_status;
  const apiResponse = {};
  try {
    const data = await AssetDetails.findAll({
      where: {
        asset_status, // Equivalent to "asset_status = ?" in raw SQL
      },
    });
    apiResponse.status = "Success";
    apiResponse["code"] = 200;
    apiResponse["data"] = data;
  } catch (err) {
    apiResponse["status"] = "error";
    apiResponse["code"] = 400;
    apiResponse["data"] = [];
    apiResponse["error"] = err;
  }
  res.json(apiResponse);
};
const getbyrefid = (req, res) => {
  const refid = req.body.asset_ref_id;
  const sql = "SELECT * FROM asset_details WHERE asset_ref_id= ?";
  db.query(sql, [refid], (err, result) => {
    res.json(result);
  });
};

const assigntoemp = async (req, res) => {
  const { emp_id, id } = req.body;
  const apiResponse = {};
  try {
    const result = await AssetDetails.update(
      { emp_id, asset_status: 2 }, // Update these columns
      { where: { id } } // Apply this condition
    );
    apiResponse["status"] = "success";
    apiResponse["code"] = 200;
    apiResponse["data"] = result;
    apiResponse["message"] = "Data updated suceesfully";
  } catch (err) {
    apiResponse["status"] = "error";
    apiResponse["code"] = 400;
    apiResponse["message"] = "something went wrong";
    apiResponse["data"] = [];
    apiResponse["error"] = err;
  }
  // res.json(apiResponse);
  console.log(asset_status);
};

const getEmpAsset = (req, res) => {
  const empid = req.body.emp_id;
  console.log(empid);
  const sql = "SELECT * FROM asset_details WHERE emp_id= ?";
  db.query(sql, [empid], (err, result) => {
    res.json(result);
  });
};
const setScrapStatus = (req, res) => {
  const { id } = req.body;
  const sql = "UPDATE asset_details SET asset_status=3 WHERE id=?";
  db.query(sql, [id], (err, result) => {
    res.json(result);
  });
};
const dbQuery = (sql, params) => {
  return new Promise((resolve, reject) => {
    db.query(sql, params, (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};
module.exports = {
  getdetails,
  getbyrefid,
  assigntoemp,
  getEmpAsset,
  get_by_status,
  setScrapStatus,
};
