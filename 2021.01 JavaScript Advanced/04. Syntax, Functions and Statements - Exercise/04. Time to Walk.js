function timeToWalk(steps, footprint, speed) {
    let distanceInMeters = steps * footprint;
    let distanceInKilometers = distanceInMeters / 1000;

    let timeInHours = distanceInKilometers / speed;
    let addedMinutes = Math.floor(distanceInMeters / 500); // every 500m - 1min break
    let timeInMinutes = timeInHours * 60 + addedMinutes;
    let timeInSeconds = timeInMinutes * 60;

    let hours = timeInHours.toFixed(0).padStart(2, '0');
    let minutes = Math.floor(timeInMinutes).toFixed(0).padStart(2, '0');
    let seconds = Math.round(timeInSeconds - (minutes * 60));

    console.log(`${hours}:${minutes}:${seconds}`);
}

timeToWalk(4000, 0.60, 5); // 00:32:48
timeToWalk(2564, 0.70, 5.5); // 00:22:35