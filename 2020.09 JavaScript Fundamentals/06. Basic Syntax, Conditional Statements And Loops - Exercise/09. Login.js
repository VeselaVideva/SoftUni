function login(arr) {
    let username = arr.shift();
    let password = username.split('').reverse().join('');
    let counter = 0;

    for (let input = 0; input < arr.length; input++) {
        if (arr[input] !== password) {
            counter++;
            if (counter === 4) {
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log(`Incorrect password. Try again.`);
        } else {
            console.log(`User ${username} logged in.`);
        }
    }
}

login(['Acer','login','go','let me in','recA']);
login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','not sunny']);