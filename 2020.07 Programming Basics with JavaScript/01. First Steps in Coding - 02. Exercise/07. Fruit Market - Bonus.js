function fruitMarket(arg1, arg2, arg3, arg4, arg5) {
    let strawberriesPrice = Number(arg1);
    let bananasQuantity = Number(arg2);
    let orangesQuantity = Number(arg3);
    let raspberriesQuantity = Number(arg4);
    let strawberriesQuantity = Number(arg5);

    let raspberriesPrice = strawberriesPrice / 2;
    let orangesPrice = raspberriesPrice * 0.6;
    let bananasPrice = raspberriesPrice * 0.2;

    let sumStrawberries = strawberriesPrice * strawberriesQuantity;
    let sumBananas = bananasPrice * bananasQuantity;
    let sumOranges = orangesPrice * orangesQuantity;
    let sumRaspberries = raspberriesPrice * raspberriesQuantity;

    let money = sumStrawberries + sumBananas + sumOranges + sumRaspberries;

    console.log(money);
}

fruitMarket("48", "10", "3.3", "6.5", "1.7");