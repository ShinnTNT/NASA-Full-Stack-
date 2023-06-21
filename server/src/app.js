const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const path = require("path");

const app = express();

const planetsRouter = require("./routes/planets/planets.route");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.use(express.json());
app.use(planetsRouter);

app.use(express.static(path.join(__dirname, "..", "public")));

module.exports = app;
