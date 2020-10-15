function fuelMoney(distance, passengers, fuelPrice) {
    let totalFuel = (distance / 100) * 7;
    totalFuel += passengers * 0.100;
    let neededMoney = totalFuel * fuelPrice;

    console.log(`Needed money for that trip is ${neededMoney}lv.`);
}

fuelMoney(260, 9, 2.49);
fuelMoney(90, 14, 2.88);