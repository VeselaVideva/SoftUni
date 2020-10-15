function cleverLilly(arg1, arg2, arg3) {
    let age = Number(arg1);
    let priceWashingMachine = Number(arg2);
    let priceForOneToy = Number(arg3);

    let toys = 0;
    let money = 0;
    let lastCash = 0;

    for (let i = 1; i <= age; i++) { // counts birthdays
        if (i % 2 !== 0) { // odd
            toys += 1;
        } else { // even
            money += lastCash + 10 - 1;
            lastCash += 10;
        }
    }

    let sumFromToys = toys * priceForOneToy;
    let totalCash = sumFromToys + money;

    let diff = Math.abs(totalCash - priceWashingMachine);

    if (totalCash >= priceWashingMachine) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }
}

cleverLilly("10", "170", "6");
cleverLilly("21", "1570.98", "3");