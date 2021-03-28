function addressBook(input) {
    let catalog = {};

    for (let line of input) {
        let [name, address] = line.split(':'); // parse input
        catalog[name] = address; // store data
    }

    let sorted = Object.entries(catalog); // convert to array

    sorted.sort((a, b) => { // sort catalog
        let nameA = a[0];
        let nameB = b[0];
        return nameA.localeCompare(nameB);
    });

    for (let [name, address] of sorted) { // print result
        console.log(`${name} -> ${address}`);
    }
}

addressBook(['Tim:Doe Crossing',
             'Bill:Nelson Place',
             'Peter:Carlyle Ave',
             'Bill:Ornery Rd']);
// Bill -> Ornery Rd
// Peter -> Carlyle Ave
// Tim -> Doe Crossing