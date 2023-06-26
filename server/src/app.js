const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const path = require("path");

const app = express();

const planetsRouter = require("./routes/planets/planets.route");
const launchRouter = require("./routes/launches/launches.router");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

// app.use(morgan("combined"));

app.use(planetsRouter);
app.use(launchRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.use(express.static(path.join(__dirname, "..", "public")));

module.exports = app;
