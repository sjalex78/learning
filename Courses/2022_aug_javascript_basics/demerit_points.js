//speed limit 70 km/h OK!
//> 70 km/h +5 (1 point) eg 75km 1 point....
//Math.floor
//more than 12 point suspended license 180km

function checkSpeed(speed) {
  const baseDemeritPoints = 0;
  const maxDemeritPoints = 0;
  if (demeritPoints(speed) <= baseDemeritPoints)
    return "ok";
  if (demeritPoints(speed) <= maxDemeritPoints)
    return "Demerit Points: " + demeritPoints(speed);
  return "Oh No Suspended License";
}

function demeritPoints(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  return Math.floor((speed - speedLimit) / kmPerPoint);
}

console.log(checkSpeed(76));
