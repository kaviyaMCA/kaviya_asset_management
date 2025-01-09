const db = require("../config/dbconfig");
const Employee = require("../models/Employees"); // Adjust the path as needed
const getalldata = async (req, res) => {
  const apiResponse = {};
  try {
    const data = await Employee.findAll();
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

  // const sql = "SELECT * FROM employees";
  // db.query(sql, (err, result) => {
  //   const apiResponse = {};
  //   if (err) {
  //     apiResponse["status"] = "error";
  //     apiResponse["code"] = 400;
  //     apiResponse["data"] = [];
  //     apiResponse["error"] = err;
  //   } else {
  //     apiResponse.status = "Success";
  //     apiResponse["code"] = 200;
  //     apiResponse["data"] = result;
  //   }

  //   res.json(apiResponse);
  // });
};

const getsingledata = async (req, res) => {
  const id = req.body.id;
  try {
    const result = await Employee.findByPk(id);
    apiResponse["status"] = "success";
    apiResponse["message"] = "Data loaded suceesfully";
    apiResponse["code"] = 200;
    apiResponse["data"] = result;
  } catch (err) {
    apiResponse["status"] = "error";
    apiResponse["code"] = 400;
    apiResponse["message"] = "Something went wrong";
    apiResponse["data"] = [];
    apiResponse["error"] = err;
  }
  res.json(apiResponse);
  // const sql = "SELECT * FROM employees WHERE emp_id = ?";
  // db.query(sql, [id], (err, result) => {
  //   const apiResponse = {};
  //   if (err) {
  //     apiResponse["status"] = "error";
  //     apiResponse["code"] = 400;
  //     apiResponse["message"] = "Something went wrong";
  //     apiResponse["data"] = [];
  //     apiResponse["error"] = err;
  //   } else {
  //     apiResponse["status"] = "success";
  //     apiResponse["message"] = "Data loaded suceesfully";
  //     apiResponse["code"] = 200;
  //     apiResponse["data"] = result;
  //   }
  //   res.json(result);
  //});
};

const addemployee = async (req, res) => {
  const { name, dept, email, status } = req.body;
  const insData = {
    emp_name: name,
    emp_dept: dept,
    emp_email: email,
    status: status,
  };
  const apiResponse = {};
  try {
    const result = await Employee.create(insData);
    apiResponse["status"] = "success";
    apiResponse["code"] = 200;
    apiResponse["data"] = result;
    apiResponse["message"] = "Data added suceesfully";
  } catch (err) {
    apiResponse["status"] = "error";
    apiResponse["code"] = 400;
    apiResponse["data"] = [];
    apiResponse["message"] = "Something went wrong";
    apiResponse["error"] = err;
  }
  res.json(apiResponse);
  // console.log(req.body);
  // const sql =
  //   "INSERT INTO employees(emp_name,emp_dept,emp_email,status) VALUES (?,?,?,?)";

  // db.query(sql, [name, dept, email, status], (err, result) => {
  //   const apiResponse = {};
  //   if (err) {
  //     apiResponse["status"] = "error";
  //     apiResponse["code"] = 400;
  //     apiResponse["data"] = [];
  //     apiResponse["message"] = "Something went wrong";
  //     apiResponse["error"] = err;
  //   } else {
  //     apiResponse["status"] = "success";
  //     apiResponse["code"] = 200;
  //     apiResponse["data"] = result;
  //     apiResponse["message"] = "Data added suceesfully";
  //   }
  //   res.json(apiResponse);
  //   console.log(err);
  // });
};

const updateemployee = async (req, res) => {
  const { id, name, dept, email, status } = req.body;
  const updateData = {
    emp_id: id,
    emp_name: name,
    emp_dept: dept,
    emp_email: email,
    status: status,
  };
  const apiResponse = {};
  try {
    const result = await Employee.update(updateData, {
      where: {
        emp_id: id,
      },
    });
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
  res.json(apiResponse);
  // const sql =
  //   "UPDATE employees SET emp_name=?,emp_dept=?,emp_email=?,status=? WHERE emp_id=?";
  // console.log(id, name, dept, email, status);

  // db.query(sql, [name, dept, email, status, id], (err, result) => {
  //   const apiResponse = {};
  //   if (err) {
  //     apiResponse["status"] = "error";
  //     apiResponse["code"] = 400;
  //     apiResponse["message"] = "something went wrong";
  //     apiResponse["data"] = [];
  //     apiResponse["error"] = err;
  //   } else {
  //     apiResponse["status"] = "success";
  //     apiResponse["code"] = 200;
  //     apiResponse["data"] = result;
  //     apiResponse["message"] = "Data updated suceesfully";
  //   }
  //   res.json(apiResponse);
  // });
};

const deleteemployee = async (req, res) => {
  const id = req.body.emp_id;
  const apiResponse = {};
  try {
    const result = await Employee.destroy({
      where: {
        emp_id: id,
      },
    });
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
  res.json(apiResponse);
  // const sql = "DELETE FROM employees  WHERE emp_id=?";
  // const apiResponse = {};
  // if (id) {
  //   db.query(sql, [id], (err, result) => {
  //     if (err) {
  //       apiResponse["status"] = "error";
  //       apiResponse["code"] = 400;
  //       apiResponse["message"] = "something went wrong";
  //       apiResponse["data"] = [];
  //       apiResponse["error"] = err;
  //     } else {
  //       apiResponse["status"] = "success";
  //       apiResponse["code"] = 200;
  //       apiResponse["data"] = result;
  //       apiResponse["message"] = "data deleted Successfully";
  //     }
  //     res.json(apiResponse);
  //     return;
  //   });
  // } else {
  //   apiResponse["status"] = "error";
  //   apiResponse["code"] = 400;
  //   apiResponse["message"] = "Id is required";
  //   apiResponse["data"] = [];
  //   apiResponse["error"] = true;
  //   res.json(apiResponse);
  // }
};
module.exports = {
  getalldata,
  getsingledata,
  addemployee,
  updateemployee,
  deleteemployee,
};
