function passwordGenerator(input = []) {
    let result = (input.shift() + input.shift()).split('');
    let string = input.shift();

    let vowelsIndices = [];

    result.forEach((x, index) => {
        let arrayOfVowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
        if (arrayOfVowels.includes(x)) {
            vowelsIndices.push(index);
        }
    });

    let i = 0;
    for (let index of vowelsIndices) {
        if (i === string.length) {
            i = 0;
        }
        result[index] = string[i++].toUpperCase();
    }

    console.log(`Your generated password is ${result.reverse().join('')}`)
}

passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange']); // Your generated password is sElbGtNgAvRtOhEGzzNpAvRlO
passwordGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute']); // Your generated password is srTtcUrLhcnOttsSBltAEfTlyzULyOnSmysBA
passwordGenerator(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed']); // Your generated password is SIytsDrtDtEbBtRUqtTnSnIsDhttDEbBRrUsTSyIrD