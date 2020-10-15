function toyShop(arg1, arg2, arg3, arg4, arg5, arg6) {
    let travelCost = Number(arg1);
    let puzzleCount = Number(arg2);
    let dollCount = Number(arg3);
    let bearCount = Number(arg4);
    let minionCount = Number(arg5);
    let truckCount = Number(arg6);

    let puzzlePrice = 2.60;
    let dollPrice = 3;
    let bearPrice = 4.10;
    let minionPrice = 8.20;
    let truckPrice = 2;

    let puzzleCost = puzzleCount * puzzlePrice;
    let dollCost = dollCount * dollPrice;
    let bearCost = bearCount * bearPrice;
    let minionCost = minionCount * minionPrice;
    let truckCost = truckCount * truckPrice;

    let totalToysCount = puzzleCount + dollCount + bearCount + minionCount + truckCount;
    let totalCost = puzzleCost + dollCost + bearCost + minionCost + truckCost;

    if (totalToysCount >= 50) {
        totalCost *= 0.75;
    }

    let rent = totalCost * 0.10;
    let finalSum = totalCost - rent;

    let difference = Math.abs(finalSum - travelCost);

    if (finalSum >= travelCost) {
        console.log(`Yes! ${difference.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`);
    }
}

toyShop("40.8", "20", "25", "30", "50", "10");
toyShop("320", "8", "2", "5", "5", "1");