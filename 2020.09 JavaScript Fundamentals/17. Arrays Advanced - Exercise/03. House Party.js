function houseParty(arr) {
    let list = [];

    for (let i = 0; i < arr.length; i++) {
        let guest = arr[i];
        let name = guest.split(' ')[0];

        if (guest === `${name} is going!`) {
            if (!list.includes(name)) {
                list.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        }
        if (guest === `${name} is not going!`) {
            if (list.includes(name)) {
                list.pop(name);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    return list.join('\n');
}

console.log(houseParty(
    ['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
));
console.log(houseParty(
    ['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
));