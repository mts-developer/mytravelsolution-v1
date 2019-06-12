const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

// require(".dotenv").config();

const db = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "postgres",
    database: "mytravelsolution"
  }
});

const clientUrl = "http://localhost:3000";
const main = require("./controllers/main");
const app = express();
const whiteList = [clientUrl];
const corsOptions = {
  origin: (origin, callback) => {
    whiteList.indexOf(origin) !== -1 || !origin
      ? callback(null, true)
      : callback(new Error("Blocked by CORS"));
  }
};
const port = process.env.PORT || 7000;

app.use(helmet());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(morgan("combined"));

app.get("/", (req, res) => res.send("MyTravelSolution API Initiated"));
app.get("/flights", (req, res) => main.getTableData(req, res, db));
app.post("/flights", (req, res) => main.postTableData(req, res, db));
app.put("/flights", (req, res) => main.putTableData(req, res, db));
app.delete("/flights", (req, res) => main.deleteTableData(req, res, db));

app.listen(port, () => {
  console.log(`API is running on PORT: ${port}`);
});
