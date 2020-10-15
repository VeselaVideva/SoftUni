function depositCalculator(arg1, arg2, arg3) {
    let depositSum = Number(arg1);
    let months = Number(arg2);
    let interestRate = Number(arg3);

    let totalInterestRate = (depositSum * interestRate) / 100;
    let interestRatePetMonth = totalInterestRate / 12;
    let totalSum = depositSum + (months * interestRatePetMonth);

    console.log(totalSum);
}

depositCalculator("2350", "6", "7");