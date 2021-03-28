function partyTime(arr) {
    let list = {
        'VIP': [],
        'regular': []
    }

    let name = arr.shift();
    while (name !== 'PARTY') {
        let char = name[0];
        if (isNaN(char)) {
            list['regular'].push(name);
        } else {
            list['VIP'].push(name);
        }
        name = arr.shift();
    }

    arr.forEach(name => {
        if (list['VIP'].includes(name)) {
            let i = list['VIP'].indexOf(name);
            list['VIP'].splice(i, 1);
        } else if (list['regular'].includes(name)) {
            let i = list['regular'].indexOf(name);
            list['regular'].splice(i, 1);
        }
    });

    console.log(list['VIP'].length + list['regular'].length);
    console.log(list['VIP'].join('\n'));
    console.log(list['regular'].join('\n'))
}

partyTime(['7IK9Yo0h',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc',
        'tSzE5t0p',
        'PARTY',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc']);
// 2
// 7IK9Yo0h
// tSzE5t0p

partyTime(['m8rfQBvl',
        'fc1oZCE0',
        'UgffRkOn',
        '7ugX7bm0',
        '9CQBGUeJ',
        '2FQZT3uC',
        'dziNz78I',
        'mdSGyQCJ',
        'LjcVpmDL',
        'fPXNHpm1',
        'HTTbwRmM',
        'B5yTkMQi',
        '8N0FThqG',
        'xys2FYzn',
        'MDzcM9ZK',
        'PARTY',
        '2FQZT3uC',
        'dziNz78I',
        'mdSGyQCJ',
        'LjcVpmDL',
        'fPXNHpm1',
        'HTTbwRmM',
        'B5yTkMQi',
        '8N0FThqG',
        'm8rfQBvl',
        'fc1oZCE0',
        'UgffRkOn',
        '7ugX7bm0',
        '9CQBGUeJ']);
// 2
// xys2FYzn
// MDzcM9ZK