function numberPyramid(input) {
    let index = 0;
    let n = Number(input[index]);
    let current = 1;
    let isBigger = false;
    let printLine = "";

    for (let rows = 1; rows <= n; rows++) {
        for (let cols = 1; cols <= rows; cols++) {
            if (current > n) {
                isBigger = true;
                break;
            }
            printLine += current + " ";
            current++;
        }
        console.log(printLine);
        printLine = "";
        if (isBigger) {
            break;
        }
    }
}

numberPyramid(["7"]);
numberPyramid(["12"]);
numberPyramid(["15"]);