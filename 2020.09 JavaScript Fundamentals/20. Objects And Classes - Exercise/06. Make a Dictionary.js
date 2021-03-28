function makeADictionary(arr) {
    let dictionary = {};

    for (let string of arr) {
        let obj = JSON.parse(string);
        dictionary = Object.assign(dictionary, obj); // combine strings into one object
    }

    let sortedKeys = Object.keys(dictionary);
    sortedKeys.sort((a, b) => a.localeCompare(b));

    for (let term of sortedKeys) {
        let definition = dictionary[term];
        console.log(`Term: ${term} => Definition: ${definition}`);
    }

}

makeADictionary([
        '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
        '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
        '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
        '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
        '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]);
// Term: Boiler => Definition: A fuel-burning apparatus or container for heating water.
// Term: Bus => Definition: A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare.
// Term: Coffee => Definition: A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub.
// Term: Microphone => Definition: An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded.
// Term: Tape => Definition: A narrow strip of material, typically used to hold or fasten something.