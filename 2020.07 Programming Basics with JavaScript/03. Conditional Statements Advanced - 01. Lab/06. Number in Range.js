function numberInRange(arg) {
    let number = Number(arg);

    if (number >= -100 && number <= 100 && number !== 0) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

numberInRange("-25");
numberInRange("0");
numberInRange("25");