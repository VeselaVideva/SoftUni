function shoppingForSchool(arg1, arg2, arg3, arg4) {
    let pencils = Number(arg1);
    let markers = Number(arg2);
    let sketchbooks = Number(arg3);
    let notebooks = Number(arg4);

    let pricePencils = 4.75;
    let priceMarkers = 1.80;
    let priceSketchbooks = 6.50;
    let priceNotebooks = 2.50;

    let sumPencils = pencils * pricePencils;
    let sumMarkers = markers * priceMarkers;
    let sumSketchbooks = sketchbooks * priceSketchbooks;
    let sumNotebooks = notebooks * priceNotebooks;

    let totalSum = sumPencils + sumMarkers + sumSketchbooks + sumNotebooks;
    let sumAfterDiscount = totalSum - ((totalSum * 5) / 100);

    console.log(`Your total is ${sumAfterDiscount.toFixed(2)}lv`);
}

shoppingForSchool("3", "10", "3", "7");
shoppingForSchool("1", "2", "2", "12");
shoppingForSchool("5", "3", "5", "15");