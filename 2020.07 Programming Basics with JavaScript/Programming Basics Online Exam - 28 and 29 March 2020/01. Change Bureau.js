function changeBureau(arg1, arg2, arg3) {
    let bitcoin = Number(arg1);
    let yuan = Number(arg2);
    let commission = Number(arg3);

    let bitcoinInBGN = bitcoin * 1168;
    let yuanInUSD = yuan * 0.15;
    let yuanInBGN = yuanInUSD * 1.76;

    let moneyInBGN = bitcoinInBGN + yuanInBGN;
    let moneyInEURO = moneyInBGN / 1.95;
    let moneyAfterCommission = moneyInEURO - moneyInEURO * commission / 100;

    console.log(moneyAfterCommission.toFixed(2));
}

changeBureau("1", "5", "5");
changeBureau("20", "5678", "2.4");
changeBureau("7", "50200.12", "3");