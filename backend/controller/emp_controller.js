const db = require("../config/dbconfig");

const getalldata = (req, res) => {
  const sql = "SELECT * FROM employees";
  db.query(sql, (err, result) => {
    const apiResponse = {};
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

    res.json(apiResponse);
  });
};

const getsingledata = (req, res) => {
  const id = req.body.id;

  const sql = "SELECT * FROM employees WHERE emp_id = ?";
  db.query(sql, [id], (err, result) => {
    const apiResponse = {};
    if (err) {
      apiResponse["status"] = "error";
      apiResponse["code"] = 400;
      apiResponse["message"] = "Something went wrong";
      apiResponse["data"] = [];
      apiResponse["error"] = err;
    } else {
      apiResponse["status"] = "success";
      apiResponse["message"] = "Data loaded suceesfully";
      apiResponse["code"] = 200;
      apiResponse["data"] = result;
    }
    res.json(result);
  });
};

const addemployee = (req, res) => {
  const { name, dept, email, status } = req.body;
  console.log(req.body);
  const sql =
    "INSERT INTO employees(emp_name,emp_dept,emp_email,status) VALUES (?,?,?,?)";

  db.query(sql, [name, dept, email, status], (err, result) => {
    const apiResponse = {};
    if (err) {
      apiResponse["status"] = "error";
      apiResponse["code"] = 400;
      apiResponse["data"] = [];
      apiResponse["message"] = "Something went wrong";
      apiResponse["error"] = err;
    } else {
      apiResponse["status"] = "success";
      apiResponse["code"] = 200;
      apiResponse["data"] = result;
      apiResponse["message"] = "Data added suceesfully";
    }
    res.json(apiResponse);
    console.log(err);
  });
};

const updateemployee = (req, res) => {
  const { id, name, dept, email, status } = req.body;
  const sql =
    "UPDATE employees SET emp_name=?,emp_dept=?,emp_email=?,status=? WHERE emp_id=?";
  console.log(id, name, dept, email, status);

  db.query(sql, [name, dept, email, status, id], (err, result) => {
    const apiResponse = {};
    if (err) {
      apiResponse["status"] = "error";
      apiResponse["code"] = 400;
      apiResponse["message"] = "something went wrong";
      apiResponse["data"] = [];
      apiResponse["error"] = err;
    } else {
      apiResponse["status"] = "success";
      apiResponse["code"] = 200;
      apiResponse["data"] = result;
      apiResponse["message"] = "Data updated suceesfully";
    }
    res.json(apiResponse);
  });
};

const deleteemployee = (req, res) => {
  const id = req.body.emp_id;
  const sql = "DELETE FROM employees  WHERE emp_id=?";
  const apiResponse = {};
  if (id) {
    db.query(sql, [id], (err, result) => {
      if (err) {
        apiResponse["status"] = "error";
        apiResponse["code"] = 400;
        apiResponse["message"] = "something went wrong";
        apiResponse["data"] = [];
        apiResponse["error"] = err;
      } else {
        apiResponse["status"] = "success";
        apiResponse["code"] = 200;
        apiResponse["data"] = result;
        apiResponse["message"] = "data deleted Successfully";
      }
      res.json(apiResponse);
      return;
    });
  } else {
    apiResponse["status"] = "error";
    apiResponse["code"] = 400;
    apiResponse["message"] = "Id is required";
    apiResponse["data"] = [];
    apiResponse["error"] = true;
    res.json(apiResponse);
  }
};
module.exports = {
  getalldata,
  getsingledata,
  addemployee,
  updateemployee,
  deleteemployee,
};
