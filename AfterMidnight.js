var prompt = require("prompt");

function dayAndTime(n) {
  var week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  var days = Math.floor(n / 1440); // days rounded down
  var hours = Math.floor((n % 1440) / 60); //mins leftover divided and rounded down for hours
  var mins = n % 60; // minutes left over

  if (days > 6) {
    days = days % 7;
  }
  if (days < 0) {
    days = (days % 7) + 7;
  }

  if (hours < 0) {
    hours = 24 + hours;
  }

  if (mins < 0) {
    mins = 60 + mins;
  }

  if (hours < 10) {
    hours = "0" + hours.toString();
  }
  if (mins < 10) {
    mins = "0" + mins.toString();
  }

  var day = week[days];

  console.log(`${day} ${hours}:${mins}`);
}

console.log("Add 'n' number of minutes to Sunday Midnight");
prompt.start();
prompt.get(["n"], function(err, result) {
  dayAndTime(parseInt(result.n));
});

// n is minutes after
// function outputs Day name and 24 hour time
