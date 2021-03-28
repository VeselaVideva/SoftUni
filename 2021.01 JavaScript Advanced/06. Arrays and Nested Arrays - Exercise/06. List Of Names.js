function listOfNumbers(arr) {
    let result = arr.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < result.length; i++) {
        console.log(`${i + 1}.${result[i]}`);
    }
}

listOfNumbers(["John", "Bob", "Christina", "Ema"]);
// 1.Bob
// 2.Christina
// 3.Ema
// 4.John