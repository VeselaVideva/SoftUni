function inventory(arr) {
    let arrWithObjects = [];

    for (let hero of arr) {
        let obj = {}; // separate object for each hero

        hero = hero.split(' / ');

        let name = hero[0];
        let level = Number(hero[1]);
        let items = hero[2].split(', ').sort((a, b) => a.localeCompare(b)).join(', '); // sort alphabetically

        obj.Hero = name;
        obj.level = level;
        obj.items = items;

        arrWithObjects.push(obj); // push all objects into array
    }

    let sorted = arrWithObjects.sort((a, b) => a.level - b.level); // sort by level

    sorted.forEach((e) => { // print output for each hero
        console.log(`Hero: ${e.Hero}`);
        console.log(`level => ${e.level}`);
        console.log(`items => ${e.items}`);
    });
}

inventory([
        "Isacc / 25 / Apple, GravityGun",
        "Derek / 12 / BarrelVest, DestructionSword",
        "Hes / 1 / Desolator, Sentinel, Antara"
    ]);
// Hero: Hes
// level => 1
// items => Antara, Desolator, Sentinel
// Hero: Derek
// level => 12
// items => BarrelVest, DestructionSword
// Hero: Isacc
// level => 25
// items => Apple, GravityGun