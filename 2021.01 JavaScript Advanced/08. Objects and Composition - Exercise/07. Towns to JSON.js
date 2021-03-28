function townsToJSON(input) {
    let [columns, ...table] = input.map(splitLine);

    function IsEmptyString(x) {
        return x !== '';
    }

    function convertIfNum(x) {
        return isNaN(x) ? x : Number(Number(x).toFixed(2));
    }

    function splitLine(input) {
        return input.split('|').filter(IsEmptyString).map(x => x.trim()).map(convertIfNum);
    }

    return JSON.stringify(table.map(entry => {
        return columns.reduce((a, b, i) => {
            a[b] = entry[i];
            return a;
        }, {});
    }));
}

console.log(townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']));
// [{"Town":"Sofia",
//   "Latitude":42.7,
//   "Longitude":23.32
// },
// {"Town":"Beijing",
//  "Latitude":39.91,
//  "Longitude":116.36
// }]
console.log(townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']));
// [{"Town":"Veliko Turnovo",
//   "Latitude":43.08,
//   "Longitude":25.62
// },
// {"Town":"Monatevideo",
//  "Latitude":34.5,
//  "Longitude":56.11
// }]