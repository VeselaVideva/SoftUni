function storage(input) {
    let storage = new Map();

    for (let line of input) {
        let [product, qty] = line.split(' '); // parse input
        qty = Number(qty);

        if (storage.has(product)) { // check for existing values
            let existing = storage.get(product);
            storage.set(product, existing + qty);
        } else {
            storage.set(product, qty);
        }
    }

    for (let [product, qty] of storage) { // print result
        console.log(`${product} -> ${qty}`);
    }
}

storage(['tomatoes 10',
         'coffee 5',
         'olives 100',
         'coffee 40']);
// tomatoes -> 10
// coffee -> 45
// olives -> 100