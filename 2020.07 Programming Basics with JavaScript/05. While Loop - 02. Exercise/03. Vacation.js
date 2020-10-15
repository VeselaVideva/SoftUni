function vacation(input) {
    let index = 0;
    let costVacation = Number(input[index]);
    index++;

    let moneySaved = Number(input[index]);
    index++;

    let daysSpending = 0;
    let totalDays = 0;

    while (daysSpending < 5 && moneySaved < costVacation) {
        let action = input[index];
        index++;

        let newSum = Number(input[index]);

        if (action === "spend") {
            daysSpending += 1;
            moneySaved -= newSum;
            if (moneySaved < 0) {
                moneySaved = 0;
            }
        } else if (action === "save") {
            moneySaved += newSum;
            daysSpending = 0;
        }

        totalDays += 1;
        index++;
    }

    if (moneySaved >= costVacation) {
        console.log(`You saved the money for ${totalDays} days.`);
    } else {
        console.log("You can't save the money.");
        console.log(`${totalDays}`);
    }
}

vacation(
    ["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"]
);
vacation(
    ["110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"]
);
vacation(
    ["250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100"]
);