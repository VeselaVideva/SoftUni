function building(input) {
    let floorNumber = Number(input[0]);
    let roomNumber = Number(input[1]);

    for (let floor = floorNumber; floor >= 1; floor--) {
        let printLine = "";
        for (let room = 0; room < roomNumber; room++) {
            if (floor === floorNumber) {
                printLine += `L${floor}${room} `;
            } else if (floor % 2 !== 0) {
                printLine += `A${floor}${room} `;
            } else if (floor % 2 === 0) {
                printLine += `O${floor}${room} `;
            }
        }
        console.log(printLine);
    }
}

building(["6", "4"]);
building(["9", "5"]);
building(["4", "4"]);