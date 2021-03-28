function modernTimes(str) {
    let arr = str.split(' ');

    arr.forEach(word => {
        if (word.startsWith(`#`) && word.length > 1){
            let isValid = true;
            word = word.slice(1);

            for (let char of word) {
                let code = char.charCodeAt();
                if (code < 65 || code > 90 && code < 97 || code > 122) {
                    isValid = false;
                }
            }
            if (isValid) {
                console.log(word);
            }
        }
    });
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');
// special
// socialMedia

modernTimes('We are #going to test # this #shit and the result needs to be #this@word');
// going
// shit