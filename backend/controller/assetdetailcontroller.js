const db = require("../config/dbconfig");

const getdetails = (req, res) => {
  const sql = "SELECT * FROM  asset_details";
  db.query(sql, (err, result) => {
    res.json(result);
  });
};

const get_by_status = async (req, res) => {
  const asset_status = req.body.asset_status;

  const sql = "SELECT * FROM  asset_details WHERE asset_status = ?";
  const result = await dbQuery(sql, [asset_status]);
  res.json(result);
};
const getbyrefid = (req, res) => {
  const refid = req.body.asset_ref_id;
  const sql = "SELECT * FROM asset_details WHERE asset_ref_id= ?";
  db.query(sql, [refid], (err, result) => {
    res.json(result);
  });
};

const assigntoemp = (req, res) => {
  const { emp_id, id } = req.body;
  console.log(id, emp_id);
  const sql = "UPDATE asset_details SET emp_id=?,asset_status=2 WHERE id=?";
  db.query(sql, [emp_id, id], (err, result) => {
    res.json(result);
  });
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
