function sumFirstAndLastArrayElements(arr) {
    let firstElement = Number(arr.shift());
    let lastElement = Number(arr.pop());
    console.log(firstElement + lastElement);
}

sumFirstAndLastArrayElements(['20', '30', '40']);
sumFirstAndLastArrayElements(['10', '17', '22', '33']);
sumFirstAndLastArrayElements(['11', '58', '69']);