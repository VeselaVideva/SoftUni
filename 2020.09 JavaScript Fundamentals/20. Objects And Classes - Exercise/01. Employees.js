function employees(arr) {
    let object = {};

    for (let name of arr) {
        object.Name = name;
        object['Personal Number'] = name.length;
        console.log(`Name: ${object.Name} -- Personal Number: ${object['Personal Number']}`);
    }
}

employees([
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
    ]);