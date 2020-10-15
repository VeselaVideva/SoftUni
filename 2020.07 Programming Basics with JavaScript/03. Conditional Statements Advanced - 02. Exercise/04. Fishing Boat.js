function fishingBoat(arg1, arg2, arg3) {
    let budget = Number(arg1);
    let season = arg2;
    let fisherman = Number(arg3);

    let priceBoat = 0;

    if (season === "Spring") {
        priceBoat = 3000;
    } else if (season === "Summer") {
        priceBoat = 4200;
    } else if (season === "Autumn") {
        priceBoat = 4200;
    } else if (season === "Winter") {
        priceBoat = 2600;
    }

    if (fisherman <= 6) {
        priceBoat *= 0.90; // 10% discount
    } else if (fisherman > 6 && fisherman <= 11) {
        priceBoat *= 0.85; // 15% discount
    } else if (fisherman > 11) {
        priceBoat *= 0.75; // 25% discount
    }

    if (fisherman % 2 === 0 && season !== "Autumn") {
        priceBoat *= 0.95 // additional 5% discount
    }

    let diff = Math.abs(budget - priceBoat);

    if (budget >= priceBoat) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}

fishingBoat("3000", "Summer", "11");
fishingBoat("3600", "Autumn", "6");
fishingBoat("2000", "Winter", "13");