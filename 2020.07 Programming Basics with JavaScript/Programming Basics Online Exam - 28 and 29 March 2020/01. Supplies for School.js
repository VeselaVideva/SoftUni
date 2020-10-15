function suppliesForSchool(arg1, arg2, arg3, arg4) {
    let packsPen = Number(arg1);
    let packsMarker = Number(arg2);
    let cleaningDetergentInL = Number(arg3);
    let discountPercentage = Number(arg4);

    let pricePen = 5.80;
    let priceMarker = 7.20;
    let priceDetergentInL = 1.20;

    let totalPrice = packsPen * pricePen + packsMarker * priceMarker + cleaningDetergentInL * priceDetergentInL;
    let priceAfterDiscount = totalPrice - totalPrice * discountPercentage / 100;

    console.log(priceAfterDiscount.toFixed(3));
}

suppliesForSchool("2", "3", "2.5", "25");
suppliesForSchool("4", "2", "5", "13");
suppliesForSchool("7", "8", "0.5", "45");