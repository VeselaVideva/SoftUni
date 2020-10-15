function carWash(arr) {
    let carClean = 0;

    for (let command = 0; command < arr.length; command++) {
        if (arr[command] === 'soap') {
            carClean += 10;
        } else if (arr[command] === 'water') {
            carClean += carClean * 0.20;
        } else if (arr[command] === 'vacuum cleaner') {
            carClean += carClean * 0.25;
        } else if (arr[command] === 'mud') {
            carClean -= carClean * 0.10;
        }
    }
    console.log(`The car is ${carClean.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);