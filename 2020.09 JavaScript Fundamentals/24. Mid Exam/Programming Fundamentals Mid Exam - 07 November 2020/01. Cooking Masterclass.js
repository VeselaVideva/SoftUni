function cookingMasterclass(budget, students, flourPrice, eggPrice, apronPrice) {
    let totalPrice = 0;
    let flour = 0;
    let eggs = 0;
    let apron = 0;
    let freePackages = 0;

    if (students > 0) {
        for (let i = 1; i <= students; i++) {
            flour += 1;
            eggs += 10;
            apron += 1;

            if (i % 5 === 0) {
                freePackages++;
            }
        }
        apron = Math.ceil(apron * 1.20);
        totalPrice = ((flour - freePackages)) * flourPrice + eggs * eggPrice + apron * apronPrice;
    }

    if (totalPrice <= budget) {
        console.log(`Items purchased for ${totalPrice.toFixed(2)}$.`)
    } else {
        let neededMoney = totalPrice - budget;
        console.log(`${neededMoney.toFixed(2)}$ more needed.`);
    }
}

//cookingMasterclass(50, 2, 1.0, 0.10, 10.0); // Items purchased for 34.00$.
//cookingMasterclass(100, 25, 4.0, 1.0, 6.0); // 410.00$ more needed.