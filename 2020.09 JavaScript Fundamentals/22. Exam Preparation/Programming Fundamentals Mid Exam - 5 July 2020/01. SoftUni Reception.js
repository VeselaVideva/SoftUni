function softUniReception(input) {
    let [eff1, eff2, eff3, students] = input.map(Number);
    let totalEfficiency = eff1 + eff2 + eff3;
    let hours = 0;

    while (students > 0) {
        hours++;
        students -= totalEfficiency;

        if (hours % 4 === 0) {
            hours++;
        }
    }

    console.log(`Time needed: ${hours}h.`)
}

softUniReception(['5','6','4','20']);           // Time needed: 2h.
softUniReception(['1','2','3','45']);           // Time needed: 10h.
softUniReception(['3','2','5','40']);           // Time needed: 5h.

softUniReception(['1','1','1','0']);            // Time needed: 0h.
softUniReception(['100','100','100','0']);      // Time needed: 0h.
softUniReception(['1','1','1','1000']);         // Time needed: 445h.
softUniReception(['100','100','100','1000']);   // Time needed: 5h.