function storeCatalogue(input) {
    let dictionary = {};

    while (input.length) {
        let [name, price] = input.shift().split(' : ');
        price = Number(price);

        let firstLetter = name[0];
        if (!dictionary[firstLetter]) {
            dictionary[firstLetter] = [];
        }
        dictionary[firstLetter].push({name, price});
        dictionary[firstLetter].sort((a, b) => (a.name).localeCompare(b.name));
    }

    let result = [];

    Object.entries(dictionary).sort((a, b) => a[0].localeCompare(b[0])).forEach(entry => {
        let values = entry[1].sort((a, b) => (a.name).localeCompare(b.name))
                             .map(product => `  ${product.name}: ${product.price}`);
        let string = `${entry[0]}\n${values.join('\n')}`;
        result.push(string);
    });

    return result.join('\n');
}

console.log(storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']));
// A
//   Anti-Bug Spray: 15
//   Apple: 1.25
//   Appricot: 20.4
// B
//   Boiler: 300
// D
//   Deodorant: 10
// F
//   Fridge: 1500
// T
//   T-Shirt: 10
//   TV: 1499
console.log(storeCatalogue([
    'Banana : 2',
    "Rubic's Cube : 5",
    "Raspberry P : 4999",
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']));
// B
//   Banana: 2
//   Barrel: 10
// P
//   Pesho: 0.000001
// R
//   Rali Car: 2000000
//   Raspberry P: 4999
//   Rolex: 100000
//   Rollon: 10
//   Rubic's Cube: 5