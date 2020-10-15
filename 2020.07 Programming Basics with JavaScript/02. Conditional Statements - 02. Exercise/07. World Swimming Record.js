function swimRecord(arg1, arg2, arg3) {
    let recordInSeconds = Number(arg1);
    let distanceInMeters = Number(arg2);
    let timeInSecondsForOneMeter = Number(arg3);

    let swimmingTimeInSeconds = distanceInMeters * timeInSecondsForOneMeter;
    let delayForEvery15Meters = Math.floor(distanceInMeters / 15) * 12.5;
    let totalSwimmingTime = swimmingTimeInSeconds + delayForEvery15Meters;

    let diffInSeconds = Math.abs(recordInSeconds - totalSwimmingTime);

    if (recordInSeconds <= totalSwimmingTime) {
        console.log(`No, he failed! He was ${diffInSeconds.toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${totalSwimmingTime.toFixed(2)} seconds.`);
    }
}

swimRecord("10464", "1500", "20");
swimRecord("55555.67", "3017", "5.03");