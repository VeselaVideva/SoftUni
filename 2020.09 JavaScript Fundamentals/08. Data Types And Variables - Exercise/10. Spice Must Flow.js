function spiceMustFlow(startingYield) {
    let days = 0;
    let totalSpice = 0;

    while (startingYield >= 100) {
        totalSpice += (startingYield - 26);
        startingYield -= 10;
        days++;
    }

    totalSpice -= 26;

    if (totalSpice < 0) {
        totalSpice = 0;
    }

    console.log(days);
    console.log(totalSpice);
}

spiceMustFlow(111); // 2, 134
spiceMustFlow(450); // 36, 8938
spiceMustFlow(200); // 11, 1338