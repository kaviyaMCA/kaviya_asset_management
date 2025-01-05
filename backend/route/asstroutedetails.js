const express = require("express");
const routes = express.Router();
const assetdetailscontroller = require("../controller/assetdetailcontroller");

routes.get("/", assetdetailscontroller.getdetails);

routes.post("/getById", assetdetailscontroller.getbyrefid);

routes.post("/assigntoemp", assetdetailscontroller.assigntoemp);

routes.post("/getEmpAsset", assetdetailscontroller.getEmpAsset);
routes.post("/getByStatus", assetdetailscontroller.get_by_status);
routes.post("/setScrapStatus", assetdetailscontroller.setScrapStatus);
routes.put("/");

routes.delete("/");

module.exports = routes;
