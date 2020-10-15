function cinemaTicket(arg) {
    let day = arg;
    let ticketPrice = 0;

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Friday":
            ticketPrice = 12;
            break;
        case "Wednesday":
        case "Thursday":
            ticketPrice = 14;
            break;
        case "Saturday":
        case "Sunday":
            ticketPrice = 16;
            break;
        default:
            break;
    }
    console.log(ticketPrice);
}

cinemaTicket("Monday");
cinemaTicket("Friday");
cinemaTicket("Sunday");