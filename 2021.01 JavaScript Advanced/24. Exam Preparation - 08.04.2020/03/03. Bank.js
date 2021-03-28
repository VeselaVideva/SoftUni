class Bank { // 63/100
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    set bankName(bankName) {
        if (typeof bankName !== 'string') {
            throw new Error('Bank name must be a string');
        }
        this._bankName = bankName;
    }

    get bankName() {
        return this._bankName;
    }

    newCustomer(customer) {
        let { firstName, lastName, personalId} = customer;

        if (this.allCustomers.find(customer => customer.personalId === personalId)) { // search in the array
            throw new Error(`”${firstName} ${lastName} is already our customer!`);
        }

        this.allCustomers.push(customer);

        return customer;
    }

    depositMoney(personalId, amount) {
        if (!this.allCustomers.find(customer => customer.personalId === personalId)) { // search in the array
            throw new Error(`We have no customer with this ID!`);
        }

        let currentCustomer = this.allCustomers.indexOf(this.allCustomers.find(customer => customer.personalId === personalId));

        this.allCustomers[currentCustomer].transactions = [];

        let transaction = `${this.allCustomers[currentCustomer].firstName} ${this.allCustomers[currentCustomer].lastName} made deposit of ${amount}$!`;

        if (isNaN(this.allCustomers[currentCustomer].totalMoney)) {
            this.allCustomers[currentCustomer].totalMoney = amount;
        } else {
            this.allCustomers[currentCustomer].totalMoney += amount;
            this.allCustomers[currentCustomer].transactions.push({ id: this.allCustomers[currentCustomer].transactions.length + 1, transaction });
        }

        this.allCustomers[currentCustomer].transactions.push({ id: this.allCustomers[currentCustomer].transactions.length + 1, transaction });

        return `${this.allCustomers[currentCustomer].totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        if (!this.allCustomers.find(customer => customer.personalId === personalId)) { // search in the array
            throw new Error(`We have no customer with this ID!`);
        }

        let currentCustomer = this.allCustomers.indexOf(this.allCustomers.find(customer => customer.personalId === personalId));

        let currentSum = this.allCustomers[currentCustomer].totalMoney;

        if (currentSum < amount) {
            let { firstName, lastName, personalId } = currentCustomer;
            throw new Error(`${firstName} ${lastName} does not have enough money to withdraw that amount!`);
        }

        this.allCustomers[currentCustomer].totalMoney -= amount;

        let transaction = `${this.allCustomers[currentCustomer].firstName} ${this.allCustomers[currentCustomer].lastName} withdrew ${amount}$!`;

        this.allCustomers[currentCustomer].transactions.push({ id: this.allCustomers[currentCustomer].transactions.length + 1, transaction });

        return `${this.allCustomers[currentCustomer].totalMoney}$`;
    }

    customerInfo(personalId) {
        let sorting = {
            'desc': (a, b) => b.id - a.id,
        }

        if (!this.allCustomers.find(customer => customer.personalId === personalId)) { // search in the array
            throw new Error(`We have no customer with this ID!`);
        }

        let currentCustomer = this.allCustomers.indexOf(this.allCustomers.find(customer => customer.personalId === personalId));

        let result = [`Bank name: ${this.bankName}`, `Customer name: ${this.allCustomers[currentCustomer].firstName} ${this.allCustomers[currentCustomer].lastName}`, `Customer ID: ${this.allCustomers[currentCustomer].personalId}`, `Transactions:`];

        this.allCustomers[currentCustomer].transactions.sort(sorting['desc']).forEach(t => {
            result.push(`${t.id}. ${t.transaction}`);
        });

        return result.join('\n');
    }
}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));
// { firstName: ‘Svetlin’, lastName: ‘Nakov’, personalId: 6233267 }
// { firstName: ‘Mihaela’, lastName: ‘Mileva’, personalId: 4151596 }

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
// 500$
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));
// 375$

console.log(bank.customerInfo(6233267));
// Bank name: SoftUni Bank
// Customer name: Svetlin Nakov
// Customer ID: 6233267
// Total Money: 375$
// Transactions:
// 3. Svetlin Nakov withdrew 125$!
// 2. Svetlin Nakov made depostit of 250$!
// 1. Svetlin Nakov made depostit of 250$!
