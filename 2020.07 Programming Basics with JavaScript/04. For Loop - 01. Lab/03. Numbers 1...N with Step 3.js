function numbers(arg) {
    let num = Number(arg);

    for (let i = 1; i <= num; i += 3) {
        console.log(i);
    }
}

numbers("10");
numbers("7");
numbers("15");