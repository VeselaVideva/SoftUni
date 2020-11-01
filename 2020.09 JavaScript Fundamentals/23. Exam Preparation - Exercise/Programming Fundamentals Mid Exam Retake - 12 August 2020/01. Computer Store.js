function computerStore(arr) {
    let price = 0;
    let taxes = 0;
    let total = 0;
    let typeOfCustomer = arr.pop();

    for (let command of arr) {
        let part = Number(command);

        if (part > 0) {
            price += part;
            taxes = price * 0.20;
            total = price + taxes;
        } else {
            console.log(`Invalid price!`);
        }
    }

    if (typeOfCustomer === 'special') {
        total *= 0.90;
    }

    if (total > 0) {
        console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${price.toFixed(2)}$
Taxes: ${taxes.toFixed(2)}$
-----------
Total price: ${total.toFixed(2)}$`);
    } else {
        console.log(`Invalid order!`);
    }
}

computerStore(['1050', '200', '450', '2', '18.50', '16.86', 'special']);
computerStore(['1023', '15', '-20', '-5.50', '450', '20', '17.66', '19.30', 'regular']);
computerStore(['regular']);