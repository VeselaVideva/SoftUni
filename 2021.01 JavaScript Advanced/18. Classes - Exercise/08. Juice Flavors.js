function juiceFlavors(arr) {
    let bottles = new Map();
    let juices = {};

    for (let juice of arr) {
        let [fruit, quantity] = juice.split(' => ');
        quantity = Number(quantity);

        if (!juices.hasOwnProperty(fruit)) {
            juices[fruit] = 0;
        }

        juices[fruit] += quantity;

        if (juices[fruit] / 1000 >= 1) {
            let bottlesCount = Math.trunc(juices[fruit] / 1000);
            juices[fruit] -= bottlesCount * 1000;

            if (!bottles.has(fruit)) {
                bottles.set(fruit, 0);
            }
            bottles.set(fruit, bottles.get(fruit) + bottlesCount);
        }
    }

    for (let [key, value] of bottles.entries()) {
        console.log(key+' => '+value);
    }
}

console.log(juiceFlavors([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
));
// Orange => 2
// Peach => 2

console.log(juiceFlavors([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
));
// Pear => 8
// Watermelon => 10
// Kiwi => 4
