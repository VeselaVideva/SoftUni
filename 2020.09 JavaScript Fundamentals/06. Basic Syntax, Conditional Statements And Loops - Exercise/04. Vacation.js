function vacation(group, type, day) {
    let pricePerPerson = 0;

    if (type === "Students") {
        switch (day) {
            case "Friday": pricePerPerson = 8.45; break;
            case "Saturday": pricePerPerson = 9.80; break;
            case "Sunday": pricePerPerson = 10.46; break;
        }
    } else if (type === "Business") {
        switch (day) {
            case "Friday": pricePerPerson = 10.90; break;
            case "Saturday": pricePerPerson = 15.60; break;
            case "Sunday": pricePerPerson = 16; break;
        }
    } else if (type === "Regular") {
        switch (day) {
            case "Friday": pricePerPerson = 15; break;
            case "Saturday": pricePerPerson = 20; break;
            case "Sunday": pricePerPerson = 22.50; break;
        }
    }

    let totalPrice = group * pricePerPerson;

    if (type === "Students" && group >= 30) {
        totalPrice = totalPrice - totalPrice * 15 / 100;
    } else if (type === "Business" && group >= 100) {
        totalPrice = totalPrice - pricePerPerson * 10;
    } else if (type === "Regular" && group >= 10 && group <= 20) {
        totalPrice = totalPrice - totalPrice * 5 / 100;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");