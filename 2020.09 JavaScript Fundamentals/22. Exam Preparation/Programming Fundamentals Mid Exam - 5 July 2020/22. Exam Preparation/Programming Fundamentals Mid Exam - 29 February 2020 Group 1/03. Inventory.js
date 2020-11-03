function inventory(input) {
    let items = input.shift().split(', ');

    for (let command of input) {
        if (command === 'Craft!') {
            break;
        } else {
            let [action, item] = command.split(' - ');

            if (action === 'Collect') {
                if (!items.includes(item)) {
                    items.push(item);
                }
            } else if (action === 'Drop') {
                if (items.includes(item)) {
                    items.splice(items.indexOf(item), 1);
                }
            } else if (action === 'Combine Items') {
                let [oldItem, newItem] = item.split(':');
                if (items.includes(oldItem)) {
                    items.splice(items.indexOf(oldItem) + 1, 0, newItem);
                }
            } else if (action === 'Renew') {
                if (items.includes(item)) {
                    let renewed = items.splice(items.indexOf(item), 1);
                    items.push(renewed);
                }
            }
        }
    }
    console.log(items.join(', '));
}

inventory(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!']);                        // Iron, Sword, Gold
inventory(['Iron, Sword', 'Drop - Bronze', 'Combine Items - Sword:Bow', 'Renew - Iron', 'Craft!']); // Sword, Bow, Iron