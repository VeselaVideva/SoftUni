function suitcasesLoad(input) {
    let index = 0;
    let capacity = input[index];
    index++;

    let suitcases = 0;
    let isFull = false;

    let command = input[index];

    while (command !== "End") {
        let suitcase = Number(command);
        suitcases++;
        if (suitcases % 3 === 0) {
            suitcase *= 1.10;
        }
        capacity -= suitcase;
        if (capacity < 0) {
            isFull = true;
            suitcases--;
            break;
        }
        index++;
        command = input[index];
    }

    if (!isFull) {
        console.log(`Congratulations! All suitcases are loaded!`);
    } else {
        console.log(`No more space!`);
    }
    console.log(`Statistic: ${suitcases} suitcases loaded.`);
}

suitcasesLoad(['550', '100', '252', '72', 'End']);
suitcasesLoad(['700.5', '180', '340.6', '126', '220']);
suitcasesLoad(['1200.2', '260', '380.5', '125.6', '305', 'End']);