function bitcoinMining(arr) {
    let dailyGold = 0;
    let totalGold = 0;
    let count = 0;
    let bitcoinsBought = 0;
    let bgnEarned = 0;
    let bitcoinCount = 0;
    let dayFirstBought = 0;
    let currentBitcoinsBought = 0;

    for (let i = 0; i <= arr.length - 1; i++) {
        count++;
        if (count % 3 === 0) {
            dailyGold = arr[i] * 0.7;
        } else {
            dailyGold = arr[i];
        }
        totalGold += dailyGold;
        bgnEarned = totalGold * 67.51;

        if (bgnEarned / 11949.16 > 1) {
            currentBitcoinsBought = Math.floor(bgnEarned / 11949.16)
            bitcoinsBought += currentBitcoinsBought
            bitcoinCount++;
            totalGold -= currentBitcoinsBought * 11949.16 / 67.51
            bgnEarned = totalGold * 67.51;
            if (bitcoinCount === 1) {
                dayFirstBought = count;
            }
            currentBitcoinsBought = 0;
        }
    }
    console.log(`Bought bitcoins: ${bitcoinsBought}`);

    if (dayFirstBought > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayFirstBought}`);
    }
    console.log(`Left money: ${bgnEarned.toFixed(2)} lv.`);
}

bitcoinMining([100,200,300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);