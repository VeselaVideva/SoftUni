function sequence2k(input) {
    let index = 0;
    let n = Number(input[index]);
    let counter = 1;

    while (counter <= n) {
        console.log(counter);
        counter = counter * 2 + 1;
    }
}

//sequence2k(["3"]);
//sequence2k(["8"]);
//sequence2k(["17"]);
sequence2k(["31"]);