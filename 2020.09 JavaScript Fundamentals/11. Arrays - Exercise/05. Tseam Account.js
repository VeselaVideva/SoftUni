function tseamAccount(arr) {
    let account = arr[0].split(' ');

    for (let game = 1; game < arr.length; game++) {
        let command = arr[game];

        while (command !== 'Play!') {
            let actionArr = command.split(' ');

            switch (actionArr[0]) {
                case 'Install':
                    if (!account.includes(actionArr[1])) {
                        account.push(actionArr[1]);
                    }
                    break;
                case 'Uninstall':
                    if (account.includes(actionArr[1])) {
                        for (let el = 0; el < account.length; el++) {
                            if (account[el] === actionArr[1]) {
                                account.splice(el, 1);
                            }
                        }
                    }
                    break;
                case 'Update':
                    if (account.includes(actionArr[1])) {
                        for (let el = 0; el < account.length; el++) {
                            if (account[el] === actionArr[1]) {
                                let update = account.splice(el, 1);
                                account.push(update.join(''));
                            }
                        }
                    }
                    break;
                case 'Expansion':
                    let expansion = actionArr[1].split('-');
                    if (account.includes(expansion[0])) {
                        for (let el = 0; el < account.length; el++) {
                            if (account[el] === expansion[0]) {
                                let expandEl = `${expansion[0]}:${expansion[1]}`;
                                account.splice(el + 1, 0, expandEl);
                            }
                        }
                    }
                    break;
            }
            game++;
            command = arr[game];
        }
    }
    console.log(account.join(' '));
}

tseamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);
tseamAccount(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!']);