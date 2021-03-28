const buyBtn = document.getElementById('buyBtn');
const ordersURL = 'http://localhost:3030/data/orders';
const message = document.getElementById('message');

buyBtn.addEventListener('click', buy);

async function buy() {
    const tableRows = [...document.querySelectorAll('tbody tr')];

    for (const row of tableRows) {
        const select = row.querySelector('input[type="checkbox"]');
        const [nameP, priceP] = row.querySelectorAll('p');
        const order = [];

        if (select.checked) {
            order.push({ name: nameP.textContent, price: Number(priceP.textContent) });
            select.checked = false;
        }

        if (order.length > 0) {
            const response = await fetch(ordersURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': token
                },
                body: JSON.stringify(order)
            });

            if (!response.ok) {
                const error = response.json();
                throw new Error(`${error.status}: ${error.message}`);
            }

            message.textContent = 'Success! You made an order.' // show success message with green color

            setTimeout(() => {
                message.textContent = '';
            }, 5000); // Success message disappears after 5 seconds
        }
    }

}