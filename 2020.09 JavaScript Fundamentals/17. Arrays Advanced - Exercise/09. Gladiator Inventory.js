function gladiatorInventory(commands) {
    let inventory = commands.shift().split(' ');

    for (let command of commands) {
        command = command.split(' ');
        let [action, equipment] = [command[0], command[1]];

        switch (action) {
            case 'Buy':
                if (!inventory.includes(equipment)) {
                    inventory.push(equipment);
                }
                break;
            case 'Trash':
                for (let i = 0; i < inventory.length; i++) {
                    if (inventory[i] === equipment) {
                        inventory.splice(i, 1);
                    }
                }
                break;
            case 'Repair':
                for (let i = 0; i < inventory.length; i++) {
                    if (inventory[i] === equipment) {
                        let repaired = inventory.splice(i, 1);
                        inventory.push(repaired.join(''));
                    }
                }
                break;
            case 'Upgrade':
                equipment = equipment.split('-');
                for (let i = 0; i < inventory.length; i++) {
                    if (inventory[i] === equipment[0]) {
                        inventory.splice(i + 1, 0, equipment.join(':'));
                        break;
                    }
                }
                break;
        }
    }

    return inventory.join(' ');
}

console.log(gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']));  // SWORD SWORD:Steel Bag Spear
console.log(gladiatorInventory(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V']));                  // SWORD Spear Shield