const { describe } = require('mocha');
const { assert } = require('chai');

let pizzUni = {
    makeAnOrder: function (obj) {
        if (!obj.orderedPizza) {
            throw new Error('You must order at least 1 Pizza to finish the order.');
        } else {
            let result = `You just ordered ${obj.orderedPizza}`
            if (obj.orderedDrink) {
                result += ` and ${obj.orderedDrink}.`
            }
            return result;
        }
    },

    getRemainingWork: function (statusArr) {
        const remainingArr = statusArr.filter(s => s.status !== 'ready');

        if (remainingArr.length > 0) {
            let pizzaNames = remainingArr.map(p => p.pizzaName).join(', ')
            let pizzasLeft = `The following pizzas are still preparing: ${pizzaNames}.`
            return pizzasLeft;
        } else {
            return 'All orders are complete!'
        }
    },

    orderType: function (totalSum, typeOfOrder) {
        if (typeOfOrder === 'Carry Out') {
            totalSum -= totalSum * 0.1;
            return totalSum;
        } else if (typeOfOrder === 'Delivery') {
            return totalSum;
        }
    }
}

describe("Tests …", function () {
    it("Make an order", () => {
        let pizza = {orderedPizza:'pizza', orderedDrink:'drink'};
        let pizza1 = {orderedDrink:'drink'};
        let pizza2 = {orderedPizza:'pizza'};
        let pizza3 = {};

        assert.throw(()=>pizzUni.makeAnOrder(pizza1),`You must order at least 1 Pizza to finish the order.`);
        assert.throw(()=>pizzUni.makeAnOrder(pizza3),`You must order at least 1 Pizza to finish the order.`);

        assert.equal(pizzUni.makeAnOrder(pizza2),`You just ordered ${pizza2.orderedPizza}`);
        assert.equal(pizzUni.makeAnOrder(pizza),`You just ordered ${pizza.orderedPizza} and ${pizza.orderedDrink}.`);
    });

    it('getRemainingWork', () => {
        let statusArr = [
            {pizzaName:'pizza',status:'ready'},
            {pizzaName:'pizza2',status:'ready'},
            {pizzaName:'pizza3',status:'preparing'},
            {pizzaName:'pizza4',status:'preparing'}
        ]
        let statusArr2 = [
            {pizzaName:'pizza',status:'ready'},
            {pizzaName:'pizza2',status:'ready'},
        ]
        let statusArr3 = [
            {pizzaName:'pizza3',status:'preparing'},
            {pizzaName:'pizza4',status:'preparing'}
        ]

        assert.equal(pizzUni.getRemainingWork(statusArr2),`All orders are complete!`);
        assert.equal(pizzUni.getRemainingWork(statusArr),`The following pizzas are still preparing: pizza3, pizza4.`);
        assert.equal(pizzUni.getRemainingWork(statusArr3),`The following pizzas are still preparing: pizza3, pizza4.`);
    });

    it('orderType', () => {
        let orderTypeDelivery = 'Delivery';
        let orderTypeCarry = 'Carry Out';
        let totalSum = 100;
        let totalSum1 = -100;
        let totalSum2 = 0;

        assert.equal(pizzUni.orderType(totalSum,orderTypeDelivery),100);
        assert.equal(pizzUni.orderType(totalSum,orderTypeCarry),90);

        assert.equal(pizzUni.orderType(totalSum1,orderTypeDelivery),-100);
        assert.equal(pizzUni.orderType(totalSum1,orderTypeCarry),-90);

        assert.equal(pizzUni.orderType(totalSum2,orderTypeDelivery),0);
        assert.equal(pizzUni.orderType(totalSum2,orderTypeCarry),0);
    });
});