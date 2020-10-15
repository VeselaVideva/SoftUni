function godzillaVsKong(arg1, arg2, arg3) {
    let movieBudget = Number(arg1);
    let numPeople = Number(arg2);
    let clothesSinglePrice = Number(arg3);

    let decor = movieBudget * 0.10;
    let clothesCost = numPeople * clothesSinglePrice;

    if (numPeople > 150) {
        clothesCost = clothesCost * 0.90;
    }

    let totalMovieCost = decor + clothesCost;
    let difference = Math.abs(movieBudget - totalMovieCost);

    if (totalMovieCost <= movieBudget) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${difference.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${difference.toFixed(2)} leva more.`);
    }
}

godzillaVsKong("20000", "120", "55.5");
godzillaVsKong("15437.62", "186", "57.99");
godzillaVsKong("9587.88", "222", "55.68");