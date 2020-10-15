function travelAgency(arg1, arg2, arg3){
    let tickets = Number(arg1);
    let budget = Number( arg2);
    let ticketPrice = Number(arg3);

    let totalPrice = tickets * ticketPrice;
    let change = budget - totalPrice;

    if (budget < totalPrice) {
        console.log(`The budget of ${budget}$ is not enough. Your client can't buy ${tickets} tickets with this budget!`);
    } else {
        console.log(`You can sell your client ${tickets} tickets for the price of ${totalPrice}$!`);
        console.log(`Your client should become a change of ${change}$!`);
    }
}

travelAgency("5", "2000", "300");
travelAgency("3", "800", "300");
travelAgency("10", "10000", "1000");