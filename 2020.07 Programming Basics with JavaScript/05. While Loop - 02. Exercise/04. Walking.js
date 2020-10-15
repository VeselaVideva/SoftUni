function walking(input) {
    let goal = 10000;
    let index = 0;
    let totalSteps = 0;

    while (totalSteps < goal && input[index] !== "Going home") {
        let steps = Number(input[index]);
        totalSteps += steps;
        index++;
    }

    if (input[index] === "Going home") {
        index++;
        let finalSteps = Number(input[index]);
        totalSteps += finalSteps;
    }

    let diff = Math.abs(totalSteps - goal);

    if (totalSteps < goal) {
        console.log(`${diff} more steps to reach goal.`);
    } else {
        console.log(`Goal reached! Good job!`);
        console.log(`${diff} steps over the goal!`);
    }
}

walking(
    ["1000",
    "1500",
    "2000",
    "6500"]
);
walking(
    ["1500",
    "300",
    "2500",
    "3000",
    "Going home",
    "200"]
);
walking(
    ["1500",
    "3000",
    "250",
    "1548",
    "2000",
    "Going home",
    "2000"]
);
walking(
    ["125",
    "250",
    "4000",
    "30",
    "2678",
    "4682"]
);