function workingHours(arg1, arg2) {
    let hour = Number(arg1);
    let day = arg2;

    if (hour >= 10 && hour <= 18) {
        if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday" || day === "Saturday") {
            console.log("open");
        } else {
            console.log("closed");
        }
    } else {
        console.log("closed");
    }
}

workingHours("11", "Monday");
workingHours("19", "Friday");
workingHours("11", "Sunday");