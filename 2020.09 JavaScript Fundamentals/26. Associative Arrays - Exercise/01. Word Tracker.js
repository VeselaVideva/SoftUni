function wordTracker(arr) {
    let words = arr.shift().split(' ');
    let collection = [];

    for (let word of words) {
        let wordCount = 0;
        while (arr.includes(word)) {
            wordCount++;
            arr.splice(arr.indexOf(word), 1);
        }
        collection.push([word, wordCount]);
    }

    collection.sort((a, b) => b[1] - a[1]);

    for (let [word, wordCount] of collection) {
        console.log(`${word} - ${wordCount}`);
    }
}

wordTracker(['this sentence', 'In','this','sentence','you','have','to','count','the','occurances',
              'of','the','words','this','and','sentence','because','this','is','your','task']);
// this - 3
// sentence - 2

wordTracker(['my name', 'In','this','my','you','have','my','count','the','occurances',
    'of','the','name','name','and','sentence','my','name','is','name','task']);
// name - 4
// my - 3