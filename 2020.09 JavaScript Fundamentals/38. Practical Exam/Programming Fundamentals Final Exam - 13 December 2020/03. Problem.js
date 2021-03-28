function problemThree(input) {
    let capacity = input.shift();
    capacity = Number(capacity);
    let messages = {};

    let line;
    while ((line = input.shift()) !== 'Statistics') {
        let actions = line.split('=');
        if (actions[0] === 'Add') {
            let userName = actions[1];
            let sent = Number(actions[2]);
            let received = Number(actions[3]);
            if (!messages.hasOwnProperty(userName)) {
                messages[userName] = {sent: 0, received: 0};
                messages[userName].sent = sent;
                messages[userName].received = received;
            }
        } else if (actions[0] === 'Message') {
            let sender = actions[1];
            let receiver = actions[2];
            if (messages.hasOwnProperty(sender) && messages.hasOwnProperty(receiver)) {
                messages[sender].sent += 1;
                messages[receiver].received += 1;
                if (messages[sender].sent + messages[sender].received >= capacity) {
                    console.log(`${sender} reached the capacity!`);
                    delete messages[sender];
                }
                if (messages[receiver].sent + messages[receiver].received >= capacity) {
                    console.log(`${receiver} reached the capacity!`);
                    delete messages[receiver];
                }
            }
        } else if (actions[0] === 'Empty') {
            let userName = actions[1];
            if (messages.hasOwnProperty(userName)) {
                delete messages[userName];
            }
            if (userName === 'All') {
                for (let user of Object.keys(messages)) {
                    delete messages[user];
                }
            }
        }
    }

    let countOfUsers = Object.keys(messages).length;

    console.log(`Users count: ${countOfUsers}`);

    let sorted = Object.entries(messages).sort(compare);

    function compare(a, b) {
        return b[1].received - a[1].received || a[0].localeCompare(b[0]);
    }

    for (let [user, value] of sorted) {
        value = messages[user].sent + messages[user].received;
        console.log(`${user} - ${value}`);
    }
}

problemThree(['10',
        'Add=Mark=5=4',
        'Add=Clark=3=5',
        'Add=Berg=9=0',
        'Add=Kevin=0=0',
        'Message=Berg=Kevin',
        'Statistics']);
// Berg reached the capacity!
// Users count: 3
// Clark - 8
// Mark - 9
// Kevin - 1

problemThree(['20',
        'Add=Mark=3=9',
        'Add=Berry=5=5',
        'Add=Clark=4=0',
        'Empty=Berry',
        'Add=Blake=9=3',
        'Add=Michael=3=9',
        'Add=Amy=9=9',
        'Message=Blake=Amy',
        'Message=Michael=Amy',
        'Statistics']);
// Amy reached the capacity!
// Users count: 4
// Mark - 12
// Michael - 13
// Blake - 13
// Clark - 4

problemThree(['12',
        'Add=Bonnie=3=5',
        'Add=Johny=4=4',
        'Empty=All',
        'Add=Bonnie=3=3',
        'Statistics']);
// Users count: 1
// Bonnie - 6