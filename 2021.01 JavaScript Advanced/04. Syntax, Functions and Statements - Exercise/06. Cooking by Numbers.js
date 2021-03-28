function cookingByNumbers(start, ...actions) {
    start = Number(start);
    let result = start;
    let action;

    while((action = actions.shift()) !== undefined) {
        switch (action) {
            case 'chop': // divide the number by two
                result /= 2;
                console.log(result);
                break;
            case 'dice': // square root of number
                result = Math.sqrt(result);
                console.log(result);
                break;
            case 'spice': // add 1 to number
                result += 1;
                console.log(result);
                break;
            case 'bake': // multiply number by 3
                result *= 3;
                console.log(result);
                break;
            case 'fillet': // subtract 20% from number
                result -= result * 0.2;
                console.log(result);
                break;
        }
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
// 16
// 8
// 4
// 2
// 1
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
// 3
// 4
// 2
// 6
// 4.8