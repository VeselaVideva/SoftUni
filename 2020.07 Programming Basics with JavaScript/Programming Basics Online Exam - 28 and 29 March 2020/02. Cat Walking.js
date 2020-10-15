function catWalking(arg1, arg2, arg3) {
    let minutesPerDay = Number(arg1);
    let numberWalksPerDay = Number(arg2);
    let caloriesPerDay = Number(arg3);

    let totalMinutes = minutesPerDay * numberWalksPerDay;
    let totalCalories = totalMinutes * 5;
    let halfCaloriesIntake = caloriesPerDay / 2;

    if (totalCalories >= halfCaloriesIntake) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalCalories}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalCalories}.`);
    }
}

catWalking("30", "3", "600");
catWalking("15", "2", "500");
catWalking("40", "2", "300");