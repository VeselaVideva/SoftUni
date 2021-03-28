function furniture(input) {
    let pattern = />>(?<name>[A-Za-z]+)<<(?<price>[0-9]+(\.[0-9]+)?)!(?<quantity>\d+)/g;
    let result = `Bought furniture:\n`;
    let total = 0;

    for (let line of input) {
        let match = pattern.exec(line);

        if (match) {
            result += match.groups.name + '\n';
            total += Number(match.groups.price) * Number(match.groups.quantity);
        }

        match = pattern.exec(line);
    }

    console.log(result + `Total money spend: ${total.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']);
// Bought furniture:
// Sofa
// TV
// Total money spend: 2436.69