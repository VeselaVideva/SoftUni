function arrayManipulator(integers, commands) {
    let output = [];

    for (let command of commands) {
        command = command.split(' ');

        if (command[0] === 'add') {
            let index = parseInt(command[1]);
            let element = parseInt(command[2]);
            integers.splice(index, 0, element);
        } else if (command[0] === 'addMany') {
            let index = parseInt(command[1]);
            for (let i = command.length - 1; i >= 2; i--) {
                let element = parseInt(command[i]);
                integers.splice(index, 0, element);
            }
        } else if (command[0] === 'contains') {
            let element = parseInt(command[1]);
            console.log(integers.indexOf(element));
        } else if (command[0] === 'remove') {
            let index = parseInt(command[1]);
            integers.splice(index, 1);
        } else if (command[0] === 'shift') {
            let index = parseInt(command[1]);
            index = index % integers.length;
            let arrayForShift = integers.slice(index - 1);
            if (index < 0) {
                index = 0;
                integers.splice(index, 0);
                for (let i = arrayForShift.length - 1; i > 0; i--) {
                    integers.unshift(arrayForShift[i]);
                    integers.pop();
                }
            } else {
                integers.splice(index, 0);
                for (let i = arrayForShift.length - 1; i > 0; i--) {
                    integers.unshift(arrayForShift[i]);
                    integers.pop();
                }
            }
        } else if (command[0] === 'sumPairs') {
            if (integers.length % 2 === 0) {
                for (let k = 0; k < integers.length; k += 2) {
                    output.push(integers[k] + integers[k + 1]);
                }
            } else {
                for (let k = 0; k < integers.length - 1; k += 2) {
                    output.push(integers[k] + integers[k + 1]);
                }
                output.push(integers.pop());
            }
            integers = output;
            output = [];
        } else if (command[0] === 'print') {
            return `[ ${integers.join(', ')} ]`;
        }
    }
}

console.log(arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']));
console.log(arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']));
console.log(arrayManipulator([1, 2, 4, 5, 6, 7, 8], ['sumPairs', 'print']));
console.log(arrayManipulator([2, 2, 4, 2, 4], ['add 1 4', 'sumPairs', 'print']));
console.log(arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], ['sumPairs', 'sumPairs', 'addMany 0 -1 -2 -3', 'print']));