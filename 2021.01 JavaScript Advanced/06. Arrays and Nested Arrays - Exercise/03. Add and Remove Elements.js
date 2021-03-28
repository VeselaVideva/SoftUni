function addRemoveElements(arr) {
    let start = 1;
    let result = [];

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === 'add') {
            result.push(start + i);
        } else if (arr[i] === 'remove') {
            result.pop();
        }
    }

    if (result.length > 0) {
        console.log(result.join('\n'));
    } else {
        console.log(`Empty`);
    }
}

addRemoveElements(['add', 'add', 'add', 'add']);
// 1
// 2
// 3
// 4
addRemoveElements(['add', 'add', 'remove', 'add', 'add']);
// 1
// 4
// 5
addRemoveElements(['remove', 'remove', 'remove']);
// Empty