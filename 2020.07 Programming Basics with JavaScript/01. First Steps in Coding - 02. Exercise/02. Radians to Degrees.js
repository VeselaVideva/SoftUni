function radiansToDegrees(arg) {
    let radians = Number(arg);
    let degrees = radians * 180 / Math.PI;

    console.log(degrees.toFixed());
}

radiansToDegrees("6.2832");