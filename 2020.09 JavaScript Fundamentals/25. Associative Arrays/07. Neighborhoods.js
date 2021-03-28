function neighborhoods(arr) {
    let map = new Map();
    let neighborhoods = arr.shift().split(', '); // Save the first element of the array as the neighborhoods

    for (let neighborhood of neighborhoods) {
        map.set(neighborhood, []); // Fill the map with them and set their values as empty arrays
    }

    for (let i = 0; i < arr.length; i++) { // Loop through the rest of the elements
        let [neighborhood, person] = arr[i].split(' - ');

        if (neighborhoods.includes(neighborhood)) { // Check if the neighborhood is in the list/map and add the person
            map.get(neighborhood).push(person);
        }
    }

    let sorted = Array.from(map).sort((a, b) => b[1].length - a[1].length); // Sort them by count of inhabitants

    for (let [address, person] of sorted) { // Print the result
        console.log(`${address}: ${person.length}`);

        person.forEach(el => {
            console.log(`--${el}`);
        });
    }
}

neighborhoods(['Abbey Street, Herald Street, Bright Mews',
               'Bright Mews - Garry',
               'Bright Mews - Andrea',
               'Invalid Street - Tommy',
               'Abbey Street - Billy']);
// Bright Mews: 2
// --Garry
// --Andrea
// Abbey Street: 1
// --Billy
// Herald Street: 0