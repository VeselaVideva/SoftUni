function kartCenter(arg1, arg2, arg3, arg4) {
    let sum = Number(arg1);
    let rounds = arg2;
    let fanCard = arg3;
    let typeCart = arg4;
    let ticketPrice = 0;

    switch (typeCart) {
        case "Child":
            if (rounds === "five") {
                ticketPrice = 7;
            } else if (rounds === "ten") {
                ticketPrice = 11;
            }
            break;
        case "Junior":
            if (rounds === "five") {
                ticketPrice = 9;
            } else if (rounds === "ten") {
                ticketPrice = 16;
            }
            break;
        case "Adult":
            if (rounds === "five") {
                ticketPrice = 12;
            } else if (rounds === "ten") {
                ticketPrice = 21;
            }
            break;
        case "Profi":
            if (rounds === "five") {
                ticketPrice = 18;
            } else if (rounds === "ten") {
                ticketPrice = 32;
            }
            break;
    }
    if (fanCard === "yes") {
        ticketPrice -= (ticketPrice * 20) / 100;
    }

    let diff = Math.abs(sum - ticketPrice);

    if (sum >= ticketPrice) {
        console.log(`You bought ${typeCart} ticket for ${rounds} laps. Your change is ${diff.toFixed(2)}lv.`);
    } else {
        console.log(`You don't have enough money! You need ${diff.toFixed(2)}lv more.`);
    }
}

kartCenter("10", "ten", "yes", "Child");
kartCenter("18", "ten", "yes", "Profi");
kartCenter("16", "five", "no", "Adult");