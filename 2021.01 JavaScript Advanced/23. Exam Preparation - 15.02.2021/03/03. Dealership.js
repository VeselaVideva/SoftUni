const { describe } = require('mocha');
const { expect } = require('chai');

let dealership = {
    newCarCost: function (oldCarModel, newCarPrice) {

        let discountForOldCar = {
            'Audi A4 B8': 15000,
            'Audi A6 4K': 20000,
            'Audi A8 D5': 25000,
            'Audi TT 8J': 14000,
        }

        if (discountForOldCar.hasOwnProperty(oldCarModel)) {
            let discount = discountForOldCar[oldCarModel];
            let finalPrice = newCarPrice - discount;
            return finalPrice;
        } else {
            return newCarPrice;
        }
    },

    carEquipment: function (extrasArr, indexArr) {
        let selectedExtras = [];
        indexArr.forEach(i => {
            selectedExtras.push(extrasArr[i])
        });

        return selectedExtras;
    },

    euroCategory: function (category) {
        if (category >= 4) {
            let price = this.newCarCost('Audi A4 B8', 30000);
            let total = price - (price * 0.05)
            return `We have added 5% discount to the final price: ${total}.`;
        } else {
            return 'Your euro category is low, so there is no discount from the final price!';
        }
    }
}

describe("tests", () => {
    describe("newCarCost", () => {
        it("returns original price when model unsupported", () => {
            expect(dealership.newCarCost('a', 1)).to.equal(1);
        });
        it("returns discounted price when model is supported", () => {
            expect(dealership.newCarCost('Audi A4 B8', 30000)).to.equal(15000);
        });
    });
    describe("carEquipment", () => {
        it("single element, single pick", () => {
            expect(dealership.carEquipment(['a'], [0])).to.deep.equal(['a']);
        });
        it("multiple elements, multiple picks", () => {
            expect(dealership.carEquipment(['a', 'b', 'c'], [0, 2])).to.deep.equal(['a', 'c']);
        });
        it("multiple elements, multiple picks", () => {
            expect(dealership.carEquipment(['a', 'b', 'c'], [1])).to.deep.equal(['b']);
        });
    });
    describe("euroCategory", () => {
        it("category is bellow threshold", () => {
            expect(dealership.euroCategory(1)).to.equal(`Your euro category is low, so there is no discount from the final price!`);
        });
        it("category is above threshold", () => {
            expect(dealership.euroCategory(5)).to.equal(`We have added 5% discount to the final price: 14250.`);
        });
        it("category is at threshold (edge case)", () => {
            expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: 14250.`);
        });
    });
});