function rectangle(width, height, color) {
    let rectangle = {};

    rectangle.width = width;
    rectangle.height = height;
    rectangle.color = color[0].toUpperCase() + color.slice(1);
    rectangle.calcArea = () => {
        return rectangle.width * rectangle.height;
    }

    return rectangle;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
// 4
// 5
// Red
// 20