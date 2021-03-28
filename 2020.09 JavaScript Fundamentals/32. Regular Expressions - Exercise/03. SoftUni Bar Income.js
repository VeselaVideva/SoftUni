function softUniBarIncome(input) {
    let income = 0;

    for (let line of input) {
        let pattern = /%(?<customer>[A-Z][a-z]+)%([^\|\$%\.]+)?<(?<product>\w+)>([^\|\$%\.]+)?\|(?<count>[0-9]+)\|([^\|\$%\.\d]+)?(?<price>[0-9]+(\.[0-9]+)?)\$/g;
        let match = pattern.exec(line);

        if (match) {
            let totalPrice = Number(match.groups.count) * Number(match.groups.price);
            income += totalPrice;
            console.log(`${match.groups.customer}: ${match.groups.product} - ${totalPrice.toFixed(2)}`);
        }
    }

    console.log(`Total income: ${income.toFixed(2)}`);
}

softUniBarIncome([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);
// George: Croissant - 20.60
// Peter: Gum - 1.30
// Maria: Cola - 2.40
// Total income: 24.30

softUniBarIncome([
        '%InvalidName%<Croissant>|2|10.3$',
        '%Peter%<Gum>1.3$',
        '%Maria%<Cola>|1|2.4',
        '%Valid%<Valid>valid|10|valid20$',
        'end of shift']);
// Valid: Valid - 200.00
// Total income: 200.00