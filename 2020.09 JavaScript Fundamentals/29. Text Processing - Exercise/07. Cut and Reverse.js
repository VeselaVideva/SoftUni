function cutAndReverse(str) {
    let strLength = str.length;
    let half = strLength / 2;
    let firstPart = str.substring(0, half);
    let secondPart = str.substring(half, str.length);

    function reverse(str) {
        let result = [];
        for (let i = 0; i < str.length; i++) {
            result.push(str[i]);
        }
        return result.reverse().join('');
    }

    let output = reverse(firstPart) + '\n' + reverse(secondPart);
    console.log(output);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
// ThisIsDifficult
// ThisIsSoAmazing

cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');
// IBetYouCantDoThis
// ImSoGoodAtThisJob