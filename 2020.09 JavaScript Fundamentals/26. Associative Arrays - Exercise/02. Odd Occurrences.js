function oddOccurrences(input) {
    let items = input.split(' ').map(el => el.toLocaleLowerCase()); // case-insensitive
    let obj = {};

    for (let item of items) {
        let keys = Object.keys(obj);

        if (keys.includes(item)) {
            obj[item]++;
        } else {
            obj[item] = 1;
        }
    }

    let sortedItems = Object.keys(obj).filter(x => obj[x] % 2 === 1).sort((a, b) => obj[b] - obj[a]);

    console.log(sortedItems.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
// c# php 1 5