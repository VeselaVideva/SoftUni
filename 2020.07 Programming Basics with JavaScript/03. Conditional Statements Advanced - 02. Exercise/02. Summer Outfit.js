function summerOutfit(arg1, arg2) {
    let degrees = Number(arg1);
    let partOfDay = arg2;

    let outfit;
    let shoes;

    if (degrees >= 10 && degrees <= 18) {
        switch (partOfDay) {
            case "Morning":
                outfit = "Sweatshirt";
                shoes = "Sneakers";
                break;
            case "Afternoon":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
            case "Evening":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
            default:
                break;
        }
    } else if (degrees > 18 && degrees <= 24) {
        switch (partOfDay) {
            case "Morning":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
            case "Afternoon":
                outfit = "T-Shirt";
                shoes = "Sandals";
                break;
            case "Evening":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
            default:
                break;
        }
    } else if (degrees >= 25) {
        switch (partOfDay) {
            case "Morning":
                outfit = "T-Shirt";
                shoes = "Sandals";
                break;
            case "Afternoon":
                outfit = "Swim Suit";
                shoes = "Barefoot";
                break;
            case "Evening":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
            default:
                break;
        }
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}

summerOutfit("16", "Morning");
summerOutfit("22", "Afternoon");
summerOutfit("28", "Evening");