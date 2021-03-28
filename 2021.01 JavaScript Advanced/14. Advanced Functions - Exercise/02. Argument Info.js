function argumentInfo(...input) {
    let info = new Map();

    input.forEach(x => {
        let type = typeof x;

        if (!info.has(type)) {
            info.set(type, 0);
        }

        info.set(type, info.get(type) + 1);

        console.log(`${type}: ${x}`);
    });

    [...info].sort(([aType, aCount], [bType, bCount]) => bCount - aCount)
        .forEach(([type, count]) => {
            console.log(`${type} = ${count}`);
        });
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });
// string: cat
// number: 42
// function: function () { console.log('Hello world!'); }
// string = 1
// number = 1
// function = 1