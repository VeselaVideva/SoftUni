function fitnessCard(arg1, arg2, arg3, arg4) {
    let availableSum = Number(arg1);
    let sex = arg2;
    let age = Number(arg3);
    let sport = arg4;

    let priceCard = 0; //in USD

    if (sex === "m") {
        switch (sport) {
            case "Gym":
                priceCard = 42;
                break;
            case "Boxing":
                priceCard = 41;
                break;
            case "Yoga":
                priceCard = 45;
                break;
            case "Zumba":
                priceCard = 34;
                break;
            case "Dances":
                priceCard = 51;
                break;
            case "Pilates":
                priceCard = 39;
                break;
        }
    } else if (sex === "f") {
        switch (sport) {
            case "Gym":
                priceCard = 35;
                break;
            case "Boxing":
                priceCard = 37;
                break;
            case "Yoga":
                priceCard = 42;
                break;
            case "Zumba":
                priceCard = 31;
                break;
            case "Dances":
                priceCard = 53;
                break;
            case "Pilates":
                priceCard = 37;
                break;
        }
    }

    if (age <= 19) {
        priceCard *= 0.80; //20% discount
    }

    let diff = Math.abs(availableSum - priceCard);

    if (priceCard <= availableSum) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else {
        console.log(`You don't have enough money! You need $${diff.toFixed(2)} more.`);
    }
}

fitnessCard("50", "m", "23", "Gym");
fitnessCard("20", "f", "15", "Yoga");
fitnessCard("10", "m", "50", "Pilates");