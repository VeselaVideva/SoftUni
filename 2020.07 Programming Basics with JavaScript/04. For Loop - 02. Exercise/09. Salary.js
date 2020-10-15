function salary(input) {
    let index = 0;
    let tabs = Number(input[0]);
    let salary = Number(input[1]);
    let salaryLeft = salary;

    for (index = 2; index < input.length; index++) {
        if (input[index] === "Facebook") {
            salaryLeft = salary - 150;
            salary = salaryLeft;
        }
        if (input[index] === "Instagram") {
            salaryLeft = salary - 100;
            salary = salaryLeft;
        }
        if (input[index] === "Reddit") {
            salaryLeft = salary - 50;
            salary = salaryLeft;
        }
    }

    if (salaryLeft <= 0) {
        console.log(`You have lost your salary.`);
    } else {
        console.log(salary);
    }
}

salary(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);
salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);
salary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"]);