function addAndRemove(arr) {
    let initialNumber = 1;
    let newArray = [];

    for (let command = 0; command < arr.length; command++) {
        if (arr[command] === 'add') {
            newArray.push(initialNumber);
            initialNumber++;
        } else if (arr[command] === 'remove') {
            newArray.pop(initialNumber);
            initialNumber++;
        }
    }

    if (newArray.length > 0) {
        console.log(newArray.join(' '));
    } else {
        console.log(`Empty`);
    }
}

addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);