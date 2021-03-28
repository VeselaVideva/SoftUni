function phoneBook(input) {
    let phonebook = {};

    for (let line of input) {
        let [name, phone] = line.split(' '); // parse input string
        phonebook[name] = phone; // store in collection
    }

    for (let name in phonebook) { // print result with for-in loop
        console.log(`${name} -> ${phonebook[name]}`);
    }
}

phoneBook(['Tim 0834212554',
           'Peter 0877547887',
           'Bill 0896543112',
           'Tim 0876566344']);
// Tim -> 0876566344
// Peter -> 0877547887
// Bill -> 0896543112