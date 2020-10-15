function skiTrip(arg1, arg2, arg3) {
    let days = Number(arg1);
    let room = arg2;
    let rating = arg3;

    let priceRoomForOne = 18.00;
    let priceApartment = 25.00;
    let pricePresidentApartment = 35.00;
    let totalCost = 0;

    let nights = days - 1; // number of nights

    if (days < 10) {
        switch (room) {
            case "room for one person":
                totalCost = nights * priceRoomForOne;
                break;
            case "apartment":
                totalCost = Number(nights * priceApartment) * 0.70;
                break;
            case "president apartment":
                totalCost = Number(nights * pricePresidentApartment) * 0.90;
                break;
            default:
                break;
        }
    } else if (days >= 10 && days <= 15) {
        switch (room) {
            case "room for one person":
                totalCost = nights * priceRoomForOne;
                break;
            case "apartment":
                totalCost = Number(nights * priceApartment) * 0.65;
                break;
            case "president apartment":
                totalCost = Number(nights * pricePresidentApartment) * 0.85;
                break;
            default:
                break;
        }
    } else if (days > 15) {
        switch (room) {
            case "room for one person":
                totalCost = nights * priceRoomForOne;
                break;
            case "apartment":
                totalCost = Number(nights * priceApartment) * 0.50;
                break;
            case "president apartment":
                totalCost = Number(nights * pricePresidentApartment) * 0.80;
                break;
            default:
                break;
        }
    }

    if (rating === "positive") {
        totalCost *= 1.25;
    } else if (rating === "negative") {
        totalCost *= 0.90;
    }
    console.log(totalCost.toFixed(2));
}

skiTrip("14", "apartment", "positive");
skiTrip("30", "president apartment", "negative");
skiTrip("12", "room for one person", "positive");
skiTrip("2", "apartment", "positive");