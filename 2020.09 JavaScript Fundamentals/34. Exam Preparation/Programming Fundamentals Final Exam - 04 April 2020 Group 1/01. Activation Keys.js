function activationKeys(input) {
    let actions = {
        Contains(rawKey, pattern) { // Checks if the raw activation key contains the given substring
            if (rawKey.includes(pattern)) {
                console.log(`${rawKey} contains ${pattern}`);
            } else {
                console.log(`Substring not found!`);
            }
            return rawKey;
        },
        Flip(rawKey, mode, start, end) { // changes the substring between the given indices (the end index is exclusive) to upper or lower case
            [start, end] = [Number(start), Number(end)];
            let first = rawKey.substring(0, start);
            let second = rawKey.substring(start, end);
            let third = rawKey.substring(end);
            if (mode === 'Upper') {
                second = second.toLocaleUpperCase();
            } else if (mode === 'Lower') {
                second = second.toLocaleLowerCase();
            }
            let result = first + second + third;
            console.log(result);
            return result;
        },
        Slice(rawKey, start, end) { // Deletes the characters between the start and end indices (end index is exclusive)
            [start, end] = [Number(start), Number(end)];
            let first = rawKey.substring(0, start);
            let second = rawKey.substring(start, end);
            let third = rawKey.substring(end);
            let result = first + third;
            console.log(result);
            return result;
        }
    };

    let rawKey = input.shift();
    let line;

    while ((line = input.shift()) !== 'Generate') {
        let [action, ...params] = line.split('>>>');
        rawKey = actions[action](rawKey, ...params);
    }

    console.log(`Your activation key is: ` + rawKey);
}

activationKeys([
        'abcdefghijklmnopqrstuvwxyz',
        'Slice>>>2>>>6',
        'Flip>>>Upper>>>3>>>14',
        'Flip>>>Lower>>>5>>>7',
        'Contains>>>def',
        'Contains>>>deF',
        'Generate']);
// abghijklmnopqrstuvwxyz
// abgHIJKLMNOPQRstuvwxyz
// abgHIjkLMNOPQRstuvwxyz
// Substring not found!
// Substring not found!
// Your activation key is: abgHIjkLMNOPQRstuvwxyz

activationKeys([
        '134softsf5ftuni2020rockz42',
        'Slice>>>3>>>7',
        'Contains>>>-rock',
        'Contains>>>-uni-',
        'Contains>>>-rocks',
        'Flip>>>Upper>>>2>>>8',
        'Flip>>>Lower>>>5>>>11',
        'Generate']);
// 134sf5ftuni2020rockz42
// Substring not found!
// Substring not found!
// Substring not found!
// 134SF5FTuni2020rockz42
// 134SF5ftuni2020rockz42
// Your activation key is: 134SF5ftuni2020rockz42