function trekkingMania(input) {
    let index = 0;
    let numberOfGroups = Number(input[index]);
    index++;

    let allPeople = 0;
    let musala = 0;
    let monblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 1; i <= numberOfGroups; i++) {
        allPeople += Number(input[i]);

        if (Number(input[i]) <= 5) {
            musala += Number(input[i]);
        } else if (Number(input[i]) >= 6 && Number(input[i]) <= 12) {
            monblan += Number(input[i]);
        } else if (Number(input[i]) >= 13 && Number(input[i]) <= 25) {
            kilimanjaro += Number(input[i]);
        } else if (Number(input[i]) >= 26 && Number(input[i]) <= 40) {
            k2 += Number(input[i]);
        } else if (Number(input[i]) >= 41) {
            everest += Number(input[i]);
        }
    }

    let percentageMusala = musala / allPeople * 100;
    let percentageMonblan = monblan / allPeople * 100;
    let percentageKilimanjaro = kilimanjaro / allPeople * 100;
    let percentageK2 = k2 / allPeople * 100;
    let percentageEverest = everest / allPeople * 100;

    console.log(`${percentageMusala.toFixed(2)}%`);
    console.log(`${percentageMonblan.toFixed(2)}%`);
    console.log(`${percentageKilimanjaro.toFixed(2)}%`);
    console.log(`${percentageK2.toFixed(2)}%`);
    console.log(`${percentageEverest.toFixed(2)}%`);
}

trekkingMania(['10', '10', '5', '1', '100', '12', '26', '17', '37', '40', '78']);
trekkingMania(['5', '25', '41', '31', '250', '6']);