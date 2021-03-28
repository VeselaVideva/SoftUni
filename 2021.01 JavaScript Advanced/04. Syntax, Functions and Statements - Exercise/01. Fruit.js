function fruit(fruit, grams, pricePerKg) {
    let weightInKg = grams / 1000;
    let moneyNeed = weightInKg * pricePerKg;

    console.log(`I need $${moneyNeed.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}

fruit('orange', 2500, 1.80); // I need $4.50 to buy 2.50 kilograms orange.
fruit('apple', 1563, 2.35); // I need $3.67 to buy 1.56 kilograms apple.