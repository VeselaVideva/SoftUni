function workingDayOrWeekend(arg) {
    let day = arg;

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            console.log("Working day");
            break;
        case "Saturday":
        case "Sunday":
            console.log("Weekend");
            break;
        default:
            console.log("Error");
            break;
    }
}

workingDayOrWeekend("Monday");
workingDayOrWeekend("Sunday");
workingDayOrWeekend("April");