function journey(arg1, arg2) {
    let budget = Number(arg1);
    let season = arg2;

    let destination;
    let place;
    let cost = 0;

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            place = "Camp";
            cost = budget * 0.30;
        } else if (season === "winter") {
            place = "Hotel";
            cost = budget * 0.70;
        }
    } else if (budget > 100 && budget <= 1000) {
        destination = "Balkans";
        if (season === "summer") {
            place = "Camp";
            cost = budget * 0.40;
        } else if (season === "winter") {
            place = "Hotel";
            cost = budget * 0.80;
        }
    } else if (budget > 1000) {
        destination = "Europe";
        place = "Hotel";
        cost = budget * 0.90;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${cost.toFixed(2)}`);
}

journey("50", "summer");
journey("75", "winter");
journey("312", "summer");
journey("678.53", "winter");
journey("1500", "summer");