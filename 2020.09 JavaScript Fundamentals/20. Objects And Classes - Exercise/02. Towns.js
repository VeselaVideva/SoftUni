function towns(arr) {
    let object = {};

    for (let info of arr) {
        let [town, latitude, longitude] = info.split(' | ');
        object.town = town;
        object.latitude = Number(latitude).toFixed(2);
        object.longitude = Number(longitude).toFixed(2);
        console.log(object);
    }
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);