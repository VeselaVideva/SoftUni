function reverseString(string) {
    let reversed = string.split('').reverse().join('');
    console.log(reversed);
}

reverseString('Hello');
reverseString('SoftUni');
reverseString('12345');