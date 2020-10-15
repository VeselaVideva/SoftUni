function tradeCommissions(arg1, arg2) {
    let city = arg1;
    let sales = Number(arg2);
    let commission = 0;

    if (city === "Sofia" && sales >= 0) {
        if (sales >= 0 && sales <= 500) {
            commission = sales * 5 / 100;
        } else if (sales > 500 && sales <= 1000) {
            commission = sales * 7 / 100;
        } else if (sales > 1000 && sales <= 10000) {
            commission = sales * 8 / 100;
        } else if (sales > 10000) {
            commission = sales * 12 / 100;
        }
        console.log(commission.toFixed(2));
    } else if (city === "Plovdiv" && sales >= 0) {
        if (sales >= 0 && sales <= 500) {
            commission = sales * 5.5 / 100;
        } else if (sales > 500 && sales <= 1000) {
            commission = sales * 8 / 100;
        } else if (sales > 1000 && sales <= 10000) {
            commission = sales * 12 / 100;
        } else if (sales > 10000) {
            commission = sales * 14.5 / 100;
        }
        console.log(commission.toFixed(2));
    } else if (city === "Varna" && sales >= 0) {
        if (sales >= 0 && sales <= 500) {
            commission = sales * 4.5 / 100;
        } else if (sales > 500 && sales <= 1000) {
            commission = sales * 7.5 / 100;
        } else if (sales > 1000 && sales <= 10000) {
            commission = sales * 10 / 100;
        } else if (sales > 10000) {
            commission = sales * 13 / 100;
        }
        console.log(commission.toFixed(2));
    } else {
        console.log("error");
    }
}

tradeCommissions("Sofia", "1500");
tradeCommissions("Plovdiv", "499.99");
tradeCommissions("Varna", "3874.50");
tradeCommissions("Kaspichan", "-50");