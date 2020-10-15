function cinemaTickets(input) {
    let index = 0;

    let ticketStandard = 0;
    let ticketStudent = 0;
    let ticketKid = 0;
    let totalTickets = 0;

    let command = input[index];

    while (command !== "Finish") {
        let movie = command;
        index++;
        let seats = Number(input[index]);
        index++;
        let ticket = input[index];
        let ticketCounter = 0;

        while (ticket !== "End") {
            if (input[index] === "standard") {
                ticketStandard++;
            } else if (input[index] === "kid") {
                ticketKid++;
            } else if (input[index] === "student") {
                ticketStudent++;
            }
            ticketCounter++;
            totalTickets++;
            if (ticketCounter >= seats) {
                break;
            }
            index++;
            ticket = input[index];
        }
        let percentage = (ticketCounter / seats) * 100;
        console.log(`${movie} - ${percentage.toFixed(2)}% full.`);

        index++;
        command = input[index];
    }

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(ticketStudent / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(ticketStandard / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(ticketKid / totalTickets * 100).toFixed(2)}% kids tickets.`);
}

cinemaTickets(
    ["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"]
);

cinemaTickets(
    ["The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"]
);