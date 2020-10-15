function dailyWage(input) {
    let index = 0;
    let rows = Number(input[index]);
    index++;
    let positions = Number(input[index]);

    let priceStrawberries = 3.50;
    let priceBlueberries = 5.00;

    let totalPriceStrawberries = 0;
    let totalPriceBlueberries = 0;

    let totalPrice = 0;
    let totalIncome = 0;

    for (let row = 1; row <= rows; row++) {
        for (let position = 1; position <= positions; position++) {
            if (row % 2 !== 0) {
                totalPriceStrawberries += priceStrawberries;
            }
            if (row % 2 === 0) {
                if (position % 3 !== 0) {
                    totalPriceBlueberries += priceBlueberries;
                }
            }
        }
    }
    totalPrice = totalPriceStrawberries + totalPriceBlueberries;
    totalIncome = totalPrice * 0.80;

    console.log(`Total: ${totalIncome.toFixed(2)} lv.`);
}

dailyWage(['5', '7']);
dailyWage(['5', '18']);
dailyWage(['2', '8']);