const { getAllLaunches, addNewLaunch } = require("../../models/launches.model");

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
  let launch = req.body;
  launch.launchDate = new Date(launch.launchDate);

  if (
    !launch.mission ||
    !launch.destination ||
    !launch.launchDate ||
    !launch.rocket
  ) {
    return res.status(400).json({
      error: "Bad Request",
    });
  }

  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: "Invalid Date",
    });
  }

  addNewLaunch(launch);
  res.status(201).json(launch);
}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunch,
};
