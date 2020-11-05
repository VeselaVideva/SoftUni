function disneylandJourney(input) {
    let journeyCost = Number(input[0]); // number in the range [500.0…10000.0]
    let months = Number(input[1]);      // number in the range [1…12]
    let savings = 0;
    let oddMonths = -1; // doesn't count the first odd month

    for (let i = 1; i <= months; i++) {
        if (i % 2 !== 0) {
            oddMonths++;
            savings -= savings * 0.16; // spent 16% of the money collected so far
        }
        if (i % 4 === 0) {
            savings += savings * 0.25; // bonus - 25% of the money collected so far
        }
        savings += journeyCost * 0.25; // save 25% of the cost of the journey
    }

    if (savings >= journeyCost) {
        let souvenirs = savings - journeyCost;
        console.log(`Bravo! You can go to Disneyland and you will have ${souvenirs.toFixed(2)}lv. for souvenirs.`);
    } else {
        let diff = journeyCost - savings;
        console.log(`Sorry. You need ${diff.toFixed(2)}lv. more.`);
    }
}

disneylandJourney(['1000', '4']); // Bravo! You can go to Disneyland and you will have 87.50lv. for souvenirs.
disneylandJourney(['3265', '3']); // Sorry. You need 1077.45lv. more.