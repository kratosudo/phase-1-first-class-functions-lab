// Code your solution in this file!
// index.js

// returnFirstTwoDrivers - an anonymous function that returns the first two drivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// returnLastTwoDrivers - an anonymous function that returns the last two drivers
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// selectingDrivers - an array containing returnFirstTwoDrivers and returnLastTwoDrivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// createFareMultiplier - a higher-order function that returns a fare multiplier function
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// fareDoubler - a function that doubles the fare
const fareDoubler = createFareMultiplier(2);

// fareTripler - a function that triples the fare
const fareTripler = createFareMultiplier(3);

// selectDifferentDrivers - a function that selects different drivers based on the given function
function selectDifferentDrivers(drivers, selectingFunction) {
  return selectingFunction(drivers);
}

module.exports = {
  returnFirstTwoDrivers,
  returnLastTwoDrivers,
  selectingDrivers,
  createFareMultiplier,
  fareDoubler,
  fareTripler,
  selectDifferentDrivers
};
