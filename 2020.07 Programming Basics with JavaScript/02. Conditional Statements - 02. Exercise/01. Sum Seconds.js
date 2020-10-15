function sumSeconds(arg1, arg2, arg3) {
    let timeFirst = Number(arg1);
    let timeSecond = Number(arg2);
    let timeThird = Number(arg3);

    let totalTime = timeFirst + timeSecond + timeThird; // time in seconds

    let minutes = Math.floor(totalTime / 60); // minutes
    let seconds = totalTime % 60; // seconds

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

sumSeconds("35", "45", "44");
sumSeconds("22", "7", "34");
sumSeconds("50", "50", "49");
sumSeconds("14", "12", "10");