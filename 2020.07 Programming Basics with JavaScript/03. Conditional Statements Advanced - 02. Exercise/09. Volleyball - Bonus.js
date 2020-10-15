function volleyball(arg1, arg2, arg3) {
    let year = arg1;
    let holidays = Number(arg2); // excluding Saturday and Sunday
    let weekends = Number(arg3); // when traveling to the birth city

    let totalWeekendsInSofia = 48 - weekends;

    let playsInSofia = totalWeekendsInSofia * 3 / 4;
    let playsInBirthCity = weekends;
    let playsOnHoliday = holidays * 2 / 3;

    let totalPlays = playsInSofia + playsInBirthCity + playsOnHoliday;

    if (year === "leap") {
        totalPlays *= 1.15;
    }

    console.log(Math.floor(totalPlays));
}

volleyball("leap", "5", "2");
volleyball("normal", "3", "2");
volleyball("leap", "2", "3");
volleyball("normal", "11", "6");
volleyball("leap", "0", "1");
volleyball("normal", "6", "13");