function maxSequenceOfEqualElements(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let currentSequence = [arr[i]];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                currentSequence.push(arr[j]);
            } else {
                break;
            }
        }
        if (result.length < currentSequence.length) {
            result = currentSequence;
        }
    }
    console.log(result.join(' '));
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqualElements([4, 4, 4, 4]);
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);