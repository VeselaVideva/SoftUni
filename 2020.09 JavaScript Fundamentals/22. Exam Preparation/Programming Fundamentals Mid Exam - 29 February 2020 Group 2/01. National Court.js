function nationalCourt(input) {
    let [eff1, eff2, eff3, people] = input.map(Number);
    let totalEfficiency = eff1 + eff2 + eff3;
    let hours = 0;

    while (people > 0) {
        hours++;
        people -= totalEfficiency;

        if (hours % 4 === 0) {
            hours++;
        }
    }

    console.log(`Time needed: ${hours}h.`)
}

nationalCourt(['5', '6', '4', '20']); // Time needed: 2h.
nationalCourt(['1', '2', '3', '45']); // Time needed: 10h.
nationalCourt(['3', '2', '5', '40']); // Time needed: 5h.