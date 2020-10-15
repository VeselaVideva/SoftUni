function leapYears(arg1, arg2) {
    let leapYear = Number(arg1);
    let year = Number(arg2);

    for (let i = leapYear; i <= year; i += 4) {
        console.log(i);
    }
}

leapYears("1908", "1919");
leapYears("2000", "2011");
leapYears("1584", "1597");
leapYears("2020", "2032");