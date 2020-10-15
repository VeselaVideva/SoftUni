function timeAfter15min(arg1, arg2) {
    let startHour = Number(arg1);
    let startMinutes = Number(arg2);

    let timeInMinutes = startHour * 60 + startMinutes;  // time in minutes
    let timeInMinutesPlus15 = timeInMinutes + 15;       // adding 15min

    let finalHour = Math.floor(timeInMinutesPlus15 / 60);
    let finalMinutes = timeInMinutesPlus15 % 60;

    if (finalHour >= 24) {
        finalHour -= 24;
    }

    if (finalMinutes < 10) {
        console.log(`${finalHour}:0${finalMinutes}`);
    } else {
        console.log(`${finalHour}:${finalMinutes}`);
    }
}

timeAfter15min("1", "46");
timeAfter15min("0", "01");
timeAfter15min("23", "59");
timeAfter15min("11", "08");
timeAfter15min("12", "49");