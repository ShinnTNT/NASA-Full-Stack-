const {
  getAllLaunches,
  addNewLaunch,
  existedLaunch,
  abortLaunch,
} = require("../../models/launches.model");

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
  return res.status(201).json(launch);
}

function httpAbortLaunch(req, res) {
  const launchId = req.params.id;
  if (!launchId) {
    return res.status(404).json({
      error: "Launch Id is required.",
    });
  }
  if (!existedLaunch(launchId)) {
    return res.status(404).json({
      error: "Cannot find launch",
    });
  }

  if (abortLaunch(launchId)) {
    return res.status(200).json(abortLaunch(launchId));
  }
}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunch,
  httpAbortLaunch,
};
