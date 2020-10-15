function foodForPets(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;
    let totalFood = Number(input[index]);
    index++;

    let dogFood = 0;
    let catFood = 0;
    let biscuitsDog = 0;
    let biscuitsCat = 0;
    let biscuitsTotal = 0;
    let eatenFood = 0;

    for (let i = 1; i <= days; i++) {
        if (i % 3 === 0) {
            biscuitsDog = Number(input[index]) * 0.10;
            biscuitsTotal += biscuitsDog;
        }
        dogFood += Number(input[index]);
        index++;
        if (i % 3 === 0) {
            biscuitsCat = Number(input[index]) * 0.10;
            biscuitsTotal += biscuitsCat;
        }
        catFood += Number(input[index]);
        index++;
    }

    eatenFood = dogFood + catFood;

    let percentageEatenFood = eatenFood / totalFood * 100;
    let percentageEatenFoodByDog = dogFood / eatenFood * 100;
    let percentageEatenFoodByCat = catFood / eatenFood * 100;

    console.log(`Total eaten biscuits: ${Math.round(biscuitsTotal)}gr.`);
    console.log(`${percentageEatenFood.toFixed(2)}% of the food has been eaten.`);
    console.log(`${percentageEatenFoodByDog.toFixed(2)}% eaten from the dog.`);
    console.log(`${percentageEatenFoodByCat.toFixed(2)}% eaten from the cat.`);
}

foodForPets(['3', '1000', '300', '20', '100', '30', '110', '40']);
foodForPets(['3', '500', '100', '30', '110', '25', '120', '35']);