function movies(arr) {
    for (let action of arr) {

        let obj = {};

        if (action.includes(`addMovie`)) {
            let name = action.replace("addMovie ", "");
            obj.name = name;

            for (let rest of arr) {
                if (rest.includes(`${name} onDate`)){
                    let date = rest.replace(`${name} onDate `, "");
                    obj.date = date;
                }
                if (rest.includes(`${name} directedBy`)){
                    let director = rest.replace(`${name} directedBy `, "");
                    obj.director = director;
                }
            }

            if (Object.keys(obj).length === 3) {
                console.log(JSON.stringify(obj));
            }
        }
    }
}

movies([
        'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'
    ]);
// {"name":"Fast and Furious","date":"30.07.2018","director":"Rob Cohen"}
// {"name":"Godfather","director":"Francis Ford Coppola","date":"29.07.2018"}