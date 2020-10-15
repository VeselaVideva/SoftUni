function energyBooster(arg1, arg2, arg3) {
    let fruit = arg1;
    let setSize = arg2;
    let order = Number(arg3);

    let price = 0;

    switch (fruit) {
        case "Watermelon":
            if (setSize === "small") {
                price = 56 * 2;
            } else {
                price = 28.70 * 5;
            }
            break;
        case "Mango":
            if (setSize === "small") {
                price = 36.66 * 2;
            } else {
                price = 19.60 * 5;
            }
            break;
        case "Pineapple":
            if (setSize === "small") {
                price = 42.10 * 2;
            } else {
                price = 24.80 * 5;
            }
            break;
        case "Raspberry":
            if (setSize === "small") {
                price = 20 * 2;
            } else {
                price = 15.20 * 5;
            }
            break;
    }

    let totalPrice = order * price;

    if (totalPrice >= 400 && totalPrice <= 1000) {
        totalPrice *= 0.85;
    } else if (totalPrice > 1000) {
        totalPrice *= 0.50;
    }

    console.log(`${totalPrice.toFixed(2)} lv.`);
}

energyBooster("Watermelon", "big", "4");
energyBooster("Pineapple", "small", "1");
energyBooster("Raspberry", "small", "50");
energyBooster("Mango", "big", "8");