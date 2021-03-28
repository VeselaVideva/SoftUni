function printWithDelimeter(arr, delimiter) {
    console.log(arr.join(delimiter));
}

printWithDelimeter(
        ['One',
        'Two',
        'Three',
        'Four',
        'Five'], '-');
// One-Two-Three-Four-Five
printWithDelimeter(
        ['How about no?',
        'I',
        'will',
        'not',
        'do',
        'it!'], '_');
// How about no?_I_will_not_do_it!
