function evenPowersOf2(arg) {
    let num = Number(arg);

    for (let i = 0; i <= num; i += 2) {
        let result = Math.pow(2, i);
        console.log(result);
    }
}

evenPowersOf2("3");
evenPowersOf2("4");
evenPowersOf2("5");
evenPowersOf2("6");
evenPowersOf2("7");