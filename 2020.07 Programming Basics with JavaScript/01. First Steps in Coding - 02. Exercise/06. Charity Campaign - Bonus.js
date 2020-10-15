function charity(arg1, arg2, arg3, arg4, arg5) {
    let daysCount = Number(arg1);
    let bakersCount = Number(arg2);
    let cakeCount = Number(arg3);
    let wafflesCount = Number(arg4);
    let pancakesCount = Number(arg5);

    let cakePrice = 45;
    let wafflePrice = 5.80;
    let pancakePrice = 3.20;

    let sumPerDayCakes = cakeCount * cakePrice;
    let sumPerDayWaffles = wafflesCount * wafflePrice;
    let sumPerDayPancakes = pancakesCount * pancakePrice;

    let totalSumPerDay = (sumPerDayCakes + sumPerDayWaffles + sumPerDayPancakes) * bakersCount;
    let totalSum = totalSumPerDay * daysCount;
    let totalSumWithoutExpenses = totalSum - totalSum / 8;

    console.log(totalSumWithoutExpenses);
}

charity("23", "8", "14", "30", "16");