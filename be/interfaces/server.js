// import package
import express from "express";

// import file
import connection from "../infrastructure/connection/mongo.js";
import routing from "./routes/index.js";

const app = express();
const port = 8080;
routing(app);

app.listen(port, () => {
  connection();
  console.log("SERVER IS RUNNING AT PORT " + port);
});
