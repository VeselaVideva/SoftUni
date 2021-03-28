function createBalloons() {
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);
            this.ribbon = {
                color: ribbonColor,
                length: ribbonLength
            }
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength);
            this.text = text;
        }
    }

    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon
    }
}

const balloons = createBalloons();

const party = new balloons.PartyBalloon('red', 10, 'yellow', 100);
console.log([party.color]); // red

const birthday = new balloons.BirthdayBalloon('blue', 10, 'green', 100, 'some text');
console.log(birthday.ribbon); // { color: 'green', length: 100 }
console.log(birthday.text); // some text