function sameNumbers(num) {
    num = num.toString();
    let sum = num.split('').map(Number).reduce((a, b) => a + b);
    let isSame = true;

    for (let i = 0; i < num.length; i++) {
        if (num[i] !== num[i + 1] && num[i + 1] !== undefined) {
            isSame = false;
        }
    }
    console.log(`${isSame}\n${sum}`);
}

sameNumbers(2222222);
// true
// 14
sameNumbers(1234);
// false
// 10