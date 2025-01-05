const express = require("express");
const routes = express.Router();
const empcontroller = require("../controller/emp_controller");

routes.get("/", empcontroller.getalldata);

routes.post("/getById", empcontroller.getsingledata);

routes.post("/", empcontroller.addemployee);

routes.put("/", empcontroller.updateemployee);

routes.delete("/", empcontroller.deleteemployee);

module.exports = routes;
