const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27, 2030"),
  destination: "Kepler-442 b",
  customer: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

let latestFlightNumber = 100;

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign({
      flightNumber: latestFlightNumber,
      customer: ["Zero to Mastery", "Shinn Thant"],
      upcoming: true,
      success: true,
    })
  );
}

function existedLaunch(launchId) {
  return launches.has(+launchId);
}

function abortLaunch(launchId) {
  let aborted = launches.get(+launchId);
  aborted.success = false;
  aborted.upcoming = false;
  return aborted;
}

module.exports = {
  launches,
  getAllLaunches,
  addNewLaunch,
  existedLaunch,
  abortLaunch,
};
