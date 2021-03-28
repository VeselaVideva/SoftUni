function convertToJSON(name, lastName, hairColor) {
    let object = {
        name: name,
        lastName: lastName,
        hairColor: hairColor
    }
    console.log(JSON.stringify(object));
}

convertToJSON('George', 'Jones', 'Brown'); // JSON input