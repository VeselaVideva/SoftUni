function hotelRoom(arg1, arg2) {
    let month = arg1;
    let nights = Number(arg2);

    let priceStudio = 0;
    let priceApartment = 0;

    if (month === "May" || month === "October") {
        priceStudio = 50;
        priceApartment = 65;
        if (nights > 7 && nights <= 14) {
            priceStudio *= 0.95; // 5% discount
        } else if (nights > 14) {
            priceStudio *= 0.70; // 30% discount
            priceApartment *= 0.90; // 10% discount
        }
    } else if (month === "June" || month === "September") {
        priceStudio = 75.20;
        priceApartment = 68.70;
        if (nights > 14) {
            priceStudio *= 0.80; // 20% discount
            priceApartment *= 0.90; // 10% discount
        }
    } else if (month === "July" || month === "August") {
        priceStudio = 76;
        priceApartment = 77;
        if (nights > 14) {
            priceApartment *= 0.90; // 10% discount
        }
    }

    let totalPriceStudio = priceStudio * nights;
    let totalPriceApartment = priceApartment * nights;

    console.log(`Apartment: ${totalPriceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${totalPriceStudio.toFixed(2)} lv.`);
}

hotelRoom("May", "15");
hotelRoom("June", "14");
hotelRoom("August", "20");