async function getInfo() {
    const id = document.getElementById('stopId').value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/` + id;

    try {
        const ul = document.getElementById('buses');
        ul.innerHTML = '';

        const response = await fetch(url);
        const data = await response.json();

        document.getElementById('stopName').textContent = data.name;

        Object.entries(data.buses).map(([bus, time]) => {
            const li = document.createElement('li');
            li.textContent = `Bus ${bus} arrives in ${time} minutes`;

            ul.appendChild(li);
        });

        id.value = '';

    } catch (error) {
        document.getElementById('stopName').textContent = 'Error';
    }
}