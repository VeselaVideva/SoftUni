function numbers(input) {
    let arr = input.split(' ').map(Number);
    let average = arr.reduce((a, b) => a + b) / arr.length;
    arr = arr.filter(x => x > average).sort((a, b) => b - a);
    console.log(arr.slice(0, 5).join(' ') || `No`);
}

numbers('10 20 30 40 50');                      // 50 40
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51'); // 60 60 51 50 50
numbers('1');                                   // No
numbers('-1 -2 -3 -4 -5 -6');                   // -1 -2 -3