function orders(product, quantity) {
    let coffeePrice = 1.50;
    let waterPrice = 1.00;
    let cokePrice = 1.40;
    let snacksPrice = 2.00;
    let totalPrice = 0;

    if (product === 'coffee') {
        totalPrice = (coffeePrice * quantity).toFixed(2);
        return totalPrice;
    } else if (product === 'water') {
        totalPrice = (waterPrice * quantity).toFixed(2);
        return totalPrice;
    } else if (product === 'coke') {
        totalPrice = (cokePrice * quantity).toFixed(2);
        return totalPrice;
    } else if (product === 'snacks') {
        totalPrice = (snacksPrice * quantity).toFixed(2);
        return totalPrice;
    }
}

console.log(orders('water', 5));
console.log(orders('coffee', 2));