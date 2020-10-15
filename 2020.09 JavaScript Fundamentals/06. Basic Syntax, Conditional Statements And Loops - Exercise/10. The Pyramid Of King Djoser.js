function thePyramidOfKingDjoser(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let area = 0;
    let innerArea = 0;
    let outerArea = 0;
    let heightCounter = 0;

    for (let i = base; i >= 1; i = i - 2) {
        heightCounter++
        if (heightCounter % 5 === 0 && i > 2) {
            innerArea = (i - 2) * (i - 2);
            stone += innerArea * increment;
            outerArea = (4 * i) - 4;
            lapis += outerArea * increment;
        } else if (i <= 2) {
            gold += (i * i) * increment;
        } else {
            area = i * i;
            innerArea = (i - 2) * (i - 2);
            stone += innerArea * increment;
            outerArea = (4 * i) - 4;
            marble += outerArea * increment;
        }
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(heightCounter * increment)}`);
}

thePyramidOfKingDjoser(11, 1);
thePyramidOfKingDjoser(11, 0.75);
thePyramidOfKingDjoser(12, 1);
thePyramidOfKingDjoser(23, 0.5);