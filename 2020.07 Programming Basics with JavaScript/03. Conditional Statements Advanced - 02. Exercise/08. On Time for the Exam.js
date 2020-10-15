function onTimeForExam(arg1, arg2, arg3, arg4) {
    let examHour = Number(arg1);        // from 0 to 23
    let examMinute = Number(arg2);      // from 0 to 59
    let arrivalHour = Number(arg3);     // from 0 to 23
    let arrivalMinute = Number(arg4);   // from 0 to 59

    let examTotalMinutes = examHour * 60 + examMinute;
    let arrivalTotalMinutes = arrivalHour * 60 + arrivalMinute;

    let diff = Math.abs(examTotalMinutes - arrivalTotalMinutes);
    let hour = Math.floor(diff / 60);
    let min = diff % 60;

    if (examTotalMinutes < arrivalTotalMinutes) {
        console.log(`Late`);
        if (arrivalTotalMinutes - examTotalMinutes >= 60) {
            if (diff % 60 >= 0) {
                if (min < 10) {
                    min = "0" + min;
                }
                console.log(`${hour}:${min} hours after the start`);
            }
        } else {
            console.log(`${diff} minutes after the start`);
        }
    } else if (examTotalMinutes === arrivalTotalMinutes || arrivalTotalMinutes >= examTotalMinutes - 30) {
        console.log(`On time`);
        if (min > 0) {
            console.log(`${diff} minutes before the start`);
        }
    } else if (arrivalTotalMinutes < examTotalMinutes - 30) {
        console.log(`Early`);
        if (examTotalMinutes - arrivalTotalMinutes >= 60) {
            if (diff % 60 >= 0) {
                if (min < 10) {
                    min = "0" + min;
                }
                console.log(`${hour}:${min} hours before the start`);
            }
        } else {
            console.log(`${diff} minutes before the start`);
        }
    }
}

onTimeForExam("9", "30", "9", "50");
onTimeForExam("9", "00", "8", "30");
onTimeForExam("16", "00", "15", "00");
onTimeForExam("9", "00", "10", "30");
onTimeForExam("14", "00", "13", "55");
onTimeForExam("11", "30", "8", "12");
onTimeForExam("10", "00", "10", "00");
onTimeForExam("11", "30", "10", "55");
onTimeForExam("11", "30", "12", "29");