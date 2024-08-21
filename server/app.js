const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const attendanceRoutes = require("./routes/attendanceRouter")
require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT;

app.use("/",(req, res, next) => {
    res.write("Server working properly")
    res.end()
})



mongoose
    .connect("mongodb://localhost:27017/project")
    .then(() => {
        app.listen(PORT, () => console.log(`server running on ${PORT}`));
    })
    .catch(() => console.log("Database Connection Error"));
