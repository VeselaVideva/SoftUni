function area(arg1, arg2, arg3) {
    let area = arg1;
    let figureArea = 0;

    if (area === "square") {
        let side = Number(arg2);
        figureArea = side * side;
    } else if (area === "rectangle") {
        let sideOne = Number(arg2);
        let sideTwo = Number(arg3);
        figureArea = sideOne * sideTwo;
    } else if (area === "circle") {
        let radius = Number(arg2);
        figureArea = Math.PI * radius * radius;
    } else if (area === "triangle") {
        let side = Number(arg2);
        let heigth = Number(arg3);
        figureArea = side * heigth / 2;
    }

    console.log(figureArea);
}

area("square", "5");
area("rectangle", "7", "2.5");
area("circle", "6");
area("triangle", "4.5", "20");