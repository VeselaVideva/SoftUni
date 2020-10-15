function convertMetersToKilometers(distanceInMeters) {
    let kilometer = 1000; // meters
    let kilometers = distanceInMeters / kilometer;

    console.log(kilometers.toFixed(2));
}

convertMetersToKilometers(1852);
convertMetersToKilometers(798);