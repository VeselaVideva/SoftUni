function storeProvision(stock, ordered) {
    let object = {};

    let inStock = restock(stock, object);
    let inOrder = restock(ordered, inStock);

    for (let product in inOrder) {
        console.log(`${product} -> ${inOrder[product]}`);
    }

    function restock(arr, obj) {
        while (arr.length !== 0) {
            let [product, qty] = [arr.shift(), arr.shift()];

            if (!obj.hasOwnProperty(product)) {
                obj[product] = Number(qty);
            } else {
                obj[product] += Number(qty);
            }
        }
        return obj;
    }
}

storeProvision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
// Chips -> 5
// CocaCola -> 9
// Bananas -> 44
// Pasta -> 11
// Beer -> 2
// Flour -> 44
// Oil -> 12
// Tomatoes -> 70