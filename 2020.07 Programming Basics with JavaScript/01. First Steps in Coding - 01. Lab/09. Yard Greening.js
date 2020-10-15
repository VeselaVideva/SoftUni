function yardGardening(arg) {
    let area = arg;
    let pricePerMeter = 7.61;
    let totalPrice = area * pricePerMeter;
    let discount = totalPrice * 0.18;
    let finalPrice = totalPrice - discount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGardening("150");