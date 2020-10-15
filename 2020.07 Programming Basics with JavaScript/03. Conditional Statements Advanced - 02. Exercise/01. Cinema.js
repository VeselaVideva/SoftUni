function cinema(arg1, arg2, arg3) {
    let projection = arg1;
    let rows = Number(arg2);
    let cols = Number(arg3);

    let price = 0;
    let totalSum = 0;

    switch (projection) {
        case "Premiere":
            price = 12.00;
            totalSum = rows * cols * price;
            console.log(`${totalSum.toFixed(2)} leva`);
            break;
        case "Normal":
            price = 7.50;
            totalSum = rows * cols * price;
            console.log(`${totalSum.toFixed(2)} leva`);
            break;
        case "Discount":
            price = 5.00;
            totalSum = rows * cols * price;
            console.log(`${totalSum.toFixed(2)} leva`);
            break;
        default:
            break;
    }
}

cinema("Premiere", "10", "12");
cinema("Normal", "21", "13");
cinema("Discount", "12", "30");