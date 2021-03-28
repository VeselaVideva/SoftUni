function aMinerTask(arr) {
    let obj = {};

    for (let i = 0; i < arr.length; i++) {

        if (i % 2 === 0) {
            let resource = arr[i];
            let quantity = arr[i + 1];

            if (!obj.hasOwnProperty(resource)) {
                obj[resource] = Number(quantity);
            } else {
                obj[resource] += Number(quantity);
            }
        }
    }

    for (let [resource, quantity] of Object.entries(obj)) {
        console.log(`${resource} -> ${quantity}`);
    }
}

aMinerTask([
        'Gold',
        '155',
        'Silver',
        '10',
        'Copper',
        '17']);
// Gold -> 155
// Silver -> 10
// Copper -> 17

aMinerTask([
        'gold',
        '155',
        'silver',
        '10',
        'copper',
        '17',
        'gold',
        '15']);
// gold -> 170
// silver -> 10
// copper -> 17