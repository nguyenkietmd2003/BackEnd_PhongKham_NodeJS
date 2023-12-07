const express = require("express");
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
require("dotenv").config();

let app = express();
// config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
viewEngine(app);
initWebRoutes(app);
// parameter listen app on env
let port = process.env.PORT || 6969;
// run app
app.listen(port, () => {
  console.log("BackEnd NodeJS is running on the port : " + port);
});
