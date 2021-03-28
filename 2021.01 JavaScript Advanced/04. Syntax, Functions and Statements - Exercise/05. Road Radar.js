function roadRadar(speed, area) {
    let limit;
    let status;

    function checkLimit(limit) {
        if (speed > limit) {
            let difference = speed - limit;

            if (difference <= 20) {
                status = 'speeding';
            } else if (difference > 20 && difference <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving';
            }

            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
        } else {
            console.log(`Driving ${speed} km/h in a ${limit} zone`);
        }
    }

    switch (area) {
        case 'motorway':
            limit = 130;
            checkLimit(limit);
            break;
        case 'interstate':
            limit = 90;
            checkLimit(limit);
            break;
        case 'city':
            limit = 50;
            checkLimit(limit);
            break;
        case 'residential':
            limit = 20;
            checkLimit(limit);
            break;
    }
}

roadRadar(40, 'city'); // Driving 40 km/h in a 50 zone
roadRadar(21, 'residential'); // The speed is 1 km/h faster than the allowed speed of 20 - speeding
roadRadar(120, 'interstate'); // The speed is 30 km/h faster than the allowed speed of 90 - excessive speeding
roadRadar(200, 'motorway'); // The speed is 70 km/h faster than the allowed speed of 130 - reckless driving