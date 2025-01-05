const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

const emproutes = require("./route/employee_route");
const asstmasterroutes = require("./route/asstroutemaster");
const asstdetailsroute = require("./route/asstroutedetails");
const PORT = 3000;

const app = express();
app.use(bodyparser.json());
app.use(cors());
app.use("/employees", emproutes);
app.use("/assetmaster", asstmasterroutes);
app.use("/assetdetails", asstdetailsroute);

// //mysql connection end

app.listen(PORT, (req, res) => {
  console.log("SERVER RUNNING SUCCESSFULLY", PORT);
});
