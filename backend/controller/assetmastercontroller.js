const db = require("../config/dbconfig");
const AssetMaster = require("../models/AssetMaster");
const getmaster = async (req, res) => {
  const apiResponse = {};
  try {
    const data = await AssetMaster.findAll();
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
  // const sql = "SELECT * FROM  asset_master";
  // db.query(sql, (err, result) => {
  //   res.json(result);
  // });
};

const getSingledata = async (req, res) => {
  const { id } = req.body;

  const sql = "SELECT * FROM  asset_master WHERE asset_id=?";
  const asset = await dbQuery(sql, [id]);
  const result = asset[0];
  const asset_id = asset[0].asset_id;
  const sql1 = "SELECT * FROM asset_details WHERE asset_ref_id=?";
  const asset1 = await dbQuery(sql1, [asset_id]);
  result.asset_details = asset1;
  console.log(asset);
  res.json(asset);
};

const addmaster = (req, res) => {
  const { type, category, count, asset_details } = req.body;

  const sql =
    "INSERT INTO asset_master(asset_type,category,count)VALUES(?,?,?)";
  db.query(sql, [type, category, count], (err, result) => {
    const insertId = result.insertId;
    const apiResponse = {};
    asset_details.forEach((element) => {
      const { asset_brand, asset_model_no, asset_status } = element;
      console.log(insertId, asset_brand, asset_model_no, asset_status);
      const sql =
        "INSERT INTO asset_details(asset_ref_id,asset_brand,asset_model_no,asset_status) VALUES (?,?,?,?)";
      db.query(
        sql,
        [insertId, asset_brand, asset_model_no, asset_status],
        (err, result) => {
          if (err) {
            apiResponse["status"] = "error";
            apiResponse["code"] = 400;
            apiResponse["data"] = [];
            apiResponse["error"] = err;
          } else {
            apiResponse.status = "Success";
            apiResponse["code"] = 200;
            apiResponse["data"] = result;
          }
        }
      );
    });
    res.json(apiResponse);
  });
};

const updatemaster = (req, res) => {
  const { id, type, category, count, asset_details } = req.body;
  const sql =
    "UPDATE  asset_master SET asset_type=?,category=?,count=?  WHERE asset_id=?";
  db.query(sql, [type, category, count, id], (err, result) => {
    const apiResponse = {};
    asset_details.forEach((element) => {
      const { id, asset_brand, asset_model_no, asset_status } = element;
      console.log(id, asset_brand, asset_model_no, asset_status);
      const sql =
        "UPDATE asset_details SET asset_brand=?,asset_model_no=?,asset_status=? WHERE id=?";
      db.query(
        sql,
        [asset_brand, asset_model_no, asset_status, id],
        (err, result) => {
          if (err) {
            apiResponse["status"] = "error";
            apiResponse["code"] = 400;
            apiResponse["data"] = [];
            apiResponse["error"] = err;
          } else {
            apiResponse.status = "Success";
            apiResponse["code"] = 200;
            apiResponse["data"] = result;
          }
        }
      );
    });
    res.json(apiResponse);
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
const deletemaster = (req, res) => {};

module.exports = {
  getmaster,
  getSingledata,
  addmaster,
  updatemaster,
  deletemaster,
};
