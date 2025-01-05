const express = require("express");
const routes = express.Router();
const mastercontroller = require("../controller/assetmastercontroller");

routes.get("/", mastercontroller.getmaster);

routes.post("/getById", mastercontroller.getSingledata);

routes.post("/", mastercontroller.addmaster);

routes.put("/", mastercontroller.updatemaster);

routes.delete("/", mastercontroller.deletemaster);

module.exports = routes;
