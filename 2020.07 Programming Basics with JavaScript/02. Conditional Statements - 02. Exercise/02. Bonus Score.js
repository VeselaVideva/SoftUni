function bonusPoints(arg) {
    let num = Number(arg);
    let bonus = 0.0;

    if (num <= 100) {
        bonus = 5;
    } else if (num > 1000) {
        bonus = num * 0.10;
    } else {
        bonus = num * 0.20;
    }

    if (num % 2 === 0) { // check if the number is even
        bonus += 1;
    } else if (num % 10 === 5) { //check if the number ends to 5
        bonus += 2;
    }

    console.log(bonus);
    console.log(num + bonus);
}

bonusPoints("20");
bonusPoints("175");
bonusPoints("2703");
bonusPoints("15875");