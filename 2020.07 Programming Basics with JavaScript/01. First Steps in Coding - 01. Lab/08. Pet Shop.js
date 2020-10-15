function petShop(arg1, arg2) {
    let dogs = Number(arg1);
    let animals = Number(arg2);
    let priceDogFood = 2.50;
    let priceAnimalFood = 4;

    let totalSum = dogs * priceDogFood + animals * priceAnimalFood;
    console.log(`${totalSum} lv.`);

}

petShop("13", "9");