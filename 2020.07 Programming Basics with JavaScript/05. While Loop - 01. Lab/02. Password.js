function password(input) {
    let index = 0;
    let name = input[index];
    index++;
    let password = input[index];
    index++;
    let inputData = input[index];

    while (inputData !== password) {
        index++;
        inputData = input[index];
    }
    console.log(`Welcome ${name}!`);
}

password(["Nakov", "1234", "Pass", "1324", "1234"]);
password(["Gosho", "secret", "secret"]);