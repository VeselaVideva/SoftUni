function distanceBetweenPoints(x1, y1, x2, y2) {
    let coordinatesX = 0;
    let coordinatesY = 0;

    if (x1 >= x2) {
        coordinatesX = x1 - x2;
    } else {
        coordinatesX = x2 - x1;
    }
    if (y1 >= y2) {
        coordinatesY = y1 - y2;
    } else {
        coordinatesY = y2 - y1;
    }

    let distance = (coordinatesX * coordinatesX) + (coordinatesY * coordinatesY);
    console.log(Math.sqrt(distance));
}

distanceBetweenPoints(2, 4, 5, 0);
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);