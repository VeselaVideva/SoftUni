function mountainRun(arg1, arg2, arg3) {
    let recordInSeconds = Number(arg1);
    let distanceInMeters = Number(arg2);
    let timeInSecondsPerMeter = Number(arg3);

    let totalSeconds = distanceInMeters * timeInSecondsPerMeter;
    let addedSecondsForEach50Meters = Math.floor(distanceInMeters / 50) * 30;
    let totalTimeInSeconds = totalSeconds + addedSecondsForEach50Meters;

    let diff = Math.abs(totalTimeInSeconds - recordInSeconds);

    if (totalTimeInSeconds < recordInSeconds) {
        console.log(`Yes! The new record is ${totalTimeInSeconds.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${diff.toFixed(2)} seconds slower.`);
    }
}

mountainRun("10164", "1400", "25");
mountainRun("5554.36", "1340", "3.23");
mountainRun("1377", "389", "3");