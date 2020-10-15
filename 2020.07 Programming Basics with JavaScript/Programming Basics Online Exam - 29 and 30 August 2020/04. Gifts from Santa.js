function giftsFromSanta(arg1, arg2, arg3) {
    let n = Number(arg1);
    let m = Number(arg2);
    let s = Number(arg3);

    let printLine = "";

    for (let i = m; i >= n; i--) {
        if (i % 2 === 0 && i % 3 === 0) {
            if (i === s) {
                break;
            }
            printLine += `${i} `;
        }
    }
    console.log(printLine);
}

giftsFromSanta("1", "30", "15");
giftsFromSanta("1", "36", "12");
giftsFromSanta("20", "1000", "36");