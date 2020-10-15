function nextDay(year, month, day) {
    month = month - 1;
    day = day + 1;

    let tomorrow = new Date(year, month, day);
    tomorrow = tomorrow + '';
    tomorrow = tomorrow.split(' ');

    switch (tomorrow[1]) {
        case "Jan": tomorrow[1] = 1; break;
        case "Feb": tomorrow[1] = 2; break;
        case "Mar": tomorrow[1] = 3; break;
        case "Apr": tomorrow[1] = 4; break;
        case "May": tomorrow[1] = 5; break;
        case "Jun": tomorrow[1] = 6; break;
        case "Jul": tomorrow[1] = 7; break;
        case "Aug": tomorrow[1] = 8; break;
        case "Sep": tomorrow[1] = 9; break;
        case "Oct": tomorrow[1] = 10; break;
        case "Nov": tomorrow[1] = 11; break;
        case "Dec": tomorrow[1] = 12; break;
    }

    switch (tomorrow[2]) {
        case "01": tomorrow[2] = 1; break;
        case "02": tomorrow[2] = 2; break;
        case "03": tomorrow[2] = 3; break;
        case "04": tomorrow[2] = 4; break;
        case "05": tomorrow[2] = 5; break;
        case "06": tomorrow[2] = 6; break;
        case "07": tomorrow[2] = 7; break;
        case "08": tomorrow[2] = 8; break;
        case "09": tomorrow[2] = 9; break;
    }

    console.log(`${tomorrow[3]}-${tomorrow[1]}-${tomorrow[2]}`);
}

nextDay(2016, 9, 30);
nextDay(1951, 12, 24);
nextDay(1, 1, 1);
nextDay(2016, 2, 28);