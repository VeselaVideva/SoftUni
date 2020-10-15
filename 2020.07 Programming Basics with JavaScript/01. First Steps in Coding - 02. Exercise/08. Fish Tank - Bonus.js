function fishTank(arg1, arg2, arg3, arg4) {
    let length = Number(arg1);
    let width = Number(arg2);
    let height = Number(arg3);
    let percentage = Number(arg4);

    let totalVolume = length * width * height;  // in cm3
    let totalLitters = totalVolume / 1000;      // in litters

    let volume = totalLitters * (1 - percentage / 100);

    console.log(volume);
}

fishTank("85", "75", "47", "17");