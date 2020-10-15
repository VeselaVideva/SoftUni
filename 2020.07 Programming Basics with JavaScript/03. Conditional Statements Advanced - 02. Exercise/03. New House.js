function newHouse(arg1, arg2, arg3) {
    let flowers = arg1;
    let numberOfFlowers = arg2;
    let budget = arg3;

    let priceRoses = 5;
    let priceDahlias = 3.80;
    let priceTulips = 2.80;
    let priceNarcissus = 3;
    let priceGladiolus = 2.50;

    let cost = 0;

    switch (flowers) {
        case "Roses":
            cost = numberOfFlowers * priceRoses;
            if (numberOfFlowers > 80) {
                cost *= 0.90; // 10% discount
            }
            break;
        case "Dahlias":
            cost = numberOfFlowers * priceDahlias;
            if (numberOfFlowers > 90) {
                cost *= 0.85; // 15% discount
            }
            break;
        case "Tulips":
            cost = numberOfFlowers * priceTulips;
            if (numberOfFlowers > 80) {
                cost *= 0.85; // 15% discount
            }
            break;
        case "Narcissus":
            cost = numberOfFlowers * priceNarcissus;
            if (numberOfFlowers < 120) {
                cost *= 1.15; // 15% more
            }
            break;
        case "Gladiolus":
            cost = numberOfFlowers * priceGladiolus;
            if (numberOfFlowers < 80) {
                cost *= 1.20; // 20% more
            }
            break;
        default:
            break;
    }

    let diff = Math.abs(budget - cost);

    if (budget >= cost) {
        console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flowers} and ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    }
}

newHouse("Roses", "55", "250");
newHouse("Tulips", "88", "260");
newHouse("Narcissus", "119", "360");