function scholarship(arg1, arg2, arg3) {
    let incomeLv = Number(arg1);
    let averageEstimation = Number(arg2);
    let minSalary = Number(arg3);

    let socialScholarship = 0;
    let excellentScholarship = 0;

    if (incomeLv >= minSalary) {
        if (averageEstimation < 5.50) {
            console.log(`You cannot get a scholarship!`);
        } else if (averageEstimation >= 5.50) {
            let excellentScholarship = Math.floor(averageEstimation * 25);
            console.log(`You get a scholarship for excellent results ${excellentScholarship.toFixed(0)} BGN`);
        }
    } else if (incomeLv < minSalary) {
        if (averageEstimation < 4.50) {
            console.log(`You cannot get a scholarship!`);
        } else if (averageEstimation >= 4.50 && averageEstimation < 5.50) {
            let socialScholarship = Math.floor(0.35 * minSalary);
            console.log(`You get a Social scholarship ${socialScholarship.toFixed(0)} BGN`);
        } else if (averageEstimation >= 5.50) {
            let excellentScholarship = Math.floor(averageEstimation * 25);
            let socialScholarship = Math.floor(0.35 * minSalary);
            if (excellentScholarship >= socialScholarship) {
                console.log(`You get a scholarship for excellent results ${excellentScholarship.toFixed(0)} BGN`);
            } else if (excellentScholarship < socialScholarship) {
                console.log(`You get a Social scholarship ${socialScholarship.toFixed(0)} BGN`);
            }
        }
    }
}

scholarship("480.00", "4.60", "450.00");
scholarship("300.00", "5.65", "420.00");