function pirates(input) {
    let actions = {
        Plunder(towns, townName, people, gold) {
            let town = towns[townName];
            town.people -= Number(people); // subtract population
            town.gold -= Number(gold); // subtract gold
            console.log(`${townName} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            if (town.people === 0 || town.gold === 0) {
                console.log(`${townName} has been wiped off the map!`);
                delete towns[townName];
            }
        },
        Prosper(towns, townName, gold) {
            let town = towns[townName];
            if (gold < 0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {
                town.gold += Number(gold); // add gold
                console.log(`${gold} gold added to the city treasury. ${townName} now has ${town.gold} gold.`);
            }
        }
    };

    let towns = {};
    let line;

    while ((line = input.shift()) !== 'Sail') {
        let [townName, people, gold] = line.split('||');
        if (!towns.hasOwnProperty(townName)) { // if town doesn't exist
            towns[townName] = {people: 0, gold: 0};
        }
        towns[townName].people += Number(people);
        towns[townName].gold += Number(gold);
    }

    while ((line = input.shift()) !== 'End') {
        let [actionName, townName, ...params] = line.split('=>');
        let action = actions[actionName];
        action(towns, townName, ...params);
    }

    let sorted = Object.entries(towns).sort(compareTowns);

    function compareTowns([nameA, townA], [nameB, townB]) { // sort by gold in descending order, then by name in ascending order
        return townB.gold - townA.gold || nameA.localeCompare(nameB);
    }

    if (sorted.length > 0) {
        console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`);
        for (let town of sorted) {
            console.log(`${town[0]} -> Population: ${town[1].people} citizens, Gold: ${town[1].gold} kg`)
        }
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }
}

pirates([
        'Tortuga||345000||1250',
        'Santo Domingo||240000||630',
        'Havana||410000||1100',
        'Sail',
        'Plunder=>Tortuga=>75000=>380',
        'Prosper=>Santo Domingo=>180',
        'End']);
// Tortuga plundered! 380 gold stolen, 75000 citizens killed.
// 180 gold added to the city treasury. Santo Domingo now has 810 gold.
// Ahoy, Captain! There are 3 wealthy settlements to go to:
// Havana -> Population: 410000 citizens, Gold: 1100 kg
// Tortuga -> Population: 270000 citizens, Gold: 870 kg
// Santo Domingo -> Population: 240000 citizens, Gold: 810 kg

pirates([
        'Nassau||95000||1000',
        'San Juan||930000||1250',
        'Campeche||270000||690',
        'Port Royal||320000||1000',
        'Port Royal||100000||2000',
        'Sail',
        'Prosper=>Port Royal=>-200',
        'Plunder=>Nassau=>94000=>750',
        'Plunder=>Nassau=>1000=>150',
        'Plunder=>Campeche=>150000=>690',
        'End']);
// Gold added cannot be a negative number!
// Nassau plundered! 750 gold stolen, 94000 citizens killed.
// Nassau plundered! 150 gold stolen, 1000 citizens killed.
// Nassau has been wiped off the map!
// Campeche plundered! 690 gold stolen, 150000 citizens killed.
// Campeche has been wiped off the map!
// Ahoy, Captain! There are 2 wealthy settlements to go to:
// Port Royal -> Population: 420000 citizens, Gold: 3000 kg
// San Juan -> Population: 930000 citizens, Gold: 1250 kg