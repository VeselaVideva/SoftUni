function coins(input) {
    let index = 0;
    let change = Number(input[index]);
    let coins = 0;

    while (change > 0) {

        if (change >= 2) {
            change = change - 2.00;
        } else if (change >= 1) {
            change = change - 1.00;
        } else if (change >= 0.50) {
            change = change - 0.50;
        } else if (change >= 0.20) {
            change = change - 0.20;
        } else if (change >= 0.10) {
            change = change - 0.10;
        } else if (change >= 0.05) {
            change = change - 0.05;
        } else if (change >= 0.02) {
            change = change - 0.02;
        } else {
            change = change - 0.01;
        }

        change = Number(change.toFixed(2)); // important!
        coins++;
    }
    console.log(coins);
}

coins(["1.23"]);
coins(["2"]);
coins(["0.56"]);
coins(["2.73"]);