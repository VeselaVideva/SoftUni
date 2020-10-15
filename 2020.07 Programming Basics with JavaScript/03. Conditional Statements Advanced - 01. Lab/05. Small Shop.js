function smallShop(arg1, arg2, arg3) {
    let product = arg1;
    let city = arg2;
    let quantity = Number(arg3);
    let price = 0;

    if (city === "Sofia") {
        switch (product) {
            case "coffee":
                price = quantity * 0.50;
                break;
            case "water":
                price = quantity * 0.80;
                break;
            case "beer":
                price = quantity * 1.20;
                break;
            case "sweets":
                price = quantity * 1.45;
                break;
            case "peanuts":
                price = quantity * 1.60;
                break;
        }
        console.log(price);
    } else if (city === "Plovdiv") {
        switch (product) {
            case "coffee":
                price = quantity * 0.40;
                break;
            case "water":
                price = quantity * 0.70;
                break;
            case "beer":
                price = quantity * 1.15;
                break;
            case "sweets":
                price = quantity * 1.30;
                break;
            case "peanuts":
                price = quantity * 1.50;
                break;
        }
        console.log(price);
    } else if (city === "Varna") {
        switch (product) {
            case "coffee":
                price = quantity * 0.45;
                break;
            case "water":
                price = quantity * 0.70;
                break;
            case "beer":
                price = quantity * 1.10;
                break;
            case "sweets":
                price = quantity * 1.35;
                break;
            case "peanuts":
                price = quantity * 1.55;
                break;
        }
        console.log(price);
    }
}

smallShop("coffee", "Varna", "2");
smallShop("peanuts", "Plovdiv", "1");
smallShop("beer", "Sofia", "6");
smallShop("water", "Plovdiv", "3");
smallShop("sweets", "Sofia", "2.23");
