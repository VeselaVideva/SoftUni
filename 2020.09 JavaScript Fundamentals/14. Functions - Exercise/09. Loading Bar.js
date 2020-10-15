function loadingBar(num) {
    let percentageIndicator = num / 10;
    let percentageLoader = '..........';
    let percentageArr = percentageLoader.split('');

    if (num === 100) {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    } else {
        for (let i = 0; i < percentageIndicator; i++) {
            percentageArr.pop();
            percentageArr.unshift('%');
        }
        console.log(`${num}% [${percentageArr.join('')}]`);
        console.log('Still loading...');
    }
}

loadingBar(30);
loadingBar(50);
loadingBar(100);