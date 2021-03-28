function autoEngineeringCompany(arr) {
    let result = arr
        .map((line) => line.split(' | '))
        .reduce((storage, cars) => {
            let [brand, model, quantity] = cars;
            if (!storage[brand]) {
                storage[brand] = {};
            }
            if (!storage[brand][model]) {
                storage[brand][model] = 0;
            }

            storage[brand][model] += Number(quantity);

            return storage;
        }, {});

    return Object.entries(result).forEach(e => {
        console.log(`${e[0]}`);
        Object.entries(e[1]).forEach(e => {
            console.log(`###${e[0]} -> ${e[1]}`);
        })
    });

}

console.log(autoEngineeringCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']));
// Audi
// ###Q7 -> 1000
// ###Q6 -> 100
// BMW
// ###X5 -> 1000
// ###X6 -> 100
// Citroen
// ###C4 -> 145
// ###C5 -> 10
// Volga
// ###GAZ-24 -> 1000000
// Lada
// ###Niva -> 1000000
// ###Jigula -> 1000000