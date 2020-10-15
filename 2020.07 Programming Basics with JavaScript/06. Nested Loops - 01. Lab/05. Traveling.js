function traveling(input) {
    let index = 0;
    let savedMoney = 0;

    while (input[index] !== "End" && input[index] !== undefined) {
        let destination = input[index];
        index++;
        let budget = Number(input[index]);
        index++;
        while (savedMoney < budget) {
            let currentSum = Number(input[index]);
            savedMoney += currentSum;
            index++;
        }
        console.log(`Going to ${destination}!`);
        if (savedMoney >= budget) {
            savedMoney = 0;
        }
        if (input[index] === "End" || input[index] === undefined) {
            break;
        }
    }
}

traveling(
    ["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"]
);

traveling(
    ["France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"]
);