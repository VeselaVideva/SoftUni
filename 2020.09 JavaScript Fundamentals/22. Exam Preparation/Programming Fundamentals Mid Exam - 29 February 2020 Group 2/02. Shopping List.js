function shoppingList(input) {
    let list = input.shift().split('!');

    for (let command of input) {
        if (command === 'Go Shopping!') {
            break;
        } else {
            command = command.split(' ');
            let action = command[0];
            if (action === 'Urgent') {
                let item = command[1];
                if (!list.includes(item)) {
                    list.unshift(item);
                }
            } else if (action === 'Unnecessary') {
                let item = command[1];
                if (list.includes(item)) {
                    list.splice(list.indexOf(item), 1);
                }
            } else if (action === 'Correct') {
                let oldItem = command[1];
                let newItem = command[2];
                if (list.includes(oldItem)) {
                    list.splice(list.indexOf(oldItem), 1, newItem);
                }
            } else if (action === 'Rearrange') {
                let item = command[1];
                if (list.includes(item)) {
                    let rearranged = list.splice(list.indexOf(item), 1);
                    list.push(rearranged);
                }
            }
        }
    }
    console.log(list.join(', '));
}

shoppingList([                          // Tomatoes, Potatoes, Bread
    'Tomatoes!Potatoes!Bread',
    'Unnecessary Milk',
    'Urgent Tomatoes',
    'Go Shopping!'
]);
shoppingList([                          // Milk, Onion, Salt, Water, Banana
    'Milk!Pepper!Salt!Water!Banana',
    'Urgent Salt',
    'Unnecessary Grapes ',
    'Correct Pepper Onion',
    'Rearrange Grapes',
    'Correct Tomatoes Potatoes',
    'Go Shopping!'
]);