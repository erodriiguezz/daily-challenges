// Given two strings representing the time you parked your car and the time you picked it up, calculate the parking fee.

// The given strings will be in the format "HH:MM" using a 24-hour clock. So "14:00" is 2pm for example.
// The first string will be the time you parked your car, and the second will be the time you picked it up.
// If the pickup time is earlier than the entry time, it means the parking spanned past midnight into the next day.
// Fee rules:

// Each hour parked costs $3.
// Partial hours are rounded up to the next full hour.
// If the parking spans overnight (past midnight), an additional $10 overnight fee is applied.
// There is a minimum fee of $5 (only used if the total would be less than $5).
// Return the total cost in the format "$cost", "$5" for example.

// Tests:
// 1. calculateParkingFee("09:00", "11:00") should return "$6".
// 2. calculateParkingFee("10:00", "10:30") should return "$5".
// 3. calculateParkingFee("08:10", "10:45") should return "$9".
// 4. calculateParkingFee("14:40", "23:10") should return "$27".
// 5. calculateParkingFee("18:15", "01:30") should return "$34".
// 6. calculateParkingFee("11:11", "11:10") should return "$82".

// convert to minutes
const parseTime = (time) => {
  let newTime =
    parseInt(time.split(":")[0]) * 60 + parseInt(time.split(":")[1]);

  return newTime / 60;
};

function calculateParkingFee(parkTime, pickupTime) {
  let totalCost = 0;

  let newParkTime = Math.floor(parseTime(parkTime));
  let newPickupTime = Math.round(parseTime(pickupTime));

  // let newParkTime = Math.floor(parseTime("11:11"));
  // let newPickupTime = Math.round(parseTime("11:10"));

  // get time difference
  let timeParked = null;

  if (newPickupTime <= newParkTime) {
    let day1Hours = Math.round(23.99 - newParkTime); // time between park and midnight

    timeParked = day1Hours + newPickupTime;
  } else {
    timeParked = newPickupTime - newParkTime;
  }

  // minimum $5
  // 3 per hour
  // 35 minutes - round up
  // overnight +$10

  if (timeParked == 1) {
    totalCost = 5;
  } else if (timeParked > 1) {
    totalCost = timeParked * 3;
  }

  if (newPickupTime <= newParkTime) {
    totalCost = timeParked * 3 + 10;
  }

  console.log(timeParked);
  console.log(totalCost);

  return `$${totalCost}`;
}
