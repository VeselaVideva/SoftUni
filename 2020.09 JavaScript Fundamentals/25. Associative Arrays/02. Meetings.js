function meetings(input) {
    let calendar = {};

    for (let line of input) {
        let [day, name] = line.split(' '); // parse input

        if (calendar.hasOwnProperty(day)) { // check for conflict
            console.log(`Conflict on ${day}!`)
        } else {
            console.log(`Scheduled for ${day}`);
            calendar[day] = name; // schedule meeting
        }
    }

    for (let day in calendar) { // print result with for-in loop
        console.log(`${day} -> ${calendar[day]}`);
    }
}

meetings(['Monday Peter',
          'Wednesday Bill',
          'Monday Tim',
          'Friday Tim']);
// Scheduled for Monday
// Scheduled for Wednesday
// Conflict on Monday!
// Scheduled for Friday
// Monday -> Peter
// Wednesday -> Bill
// Friday -> Tim