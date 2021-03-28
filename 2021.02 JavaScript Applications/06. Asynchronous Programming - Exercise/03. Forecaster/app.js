function attachEvents() {
    document.getElementById('submit').addEventListener('click', async () => {
        const forecast = document.getElementById('forecast');
        const todayForecast = document.getElementById('current');
        const upcomingForecast = document.getElementById('upcoming');

        const symbols = {
            'Sunny': '☀',
            'Partly sunny': '⛅',
            'Overcast': '☁',
            'Rain': '☂',
            'Degrees': '°'
        }

        try {
            const [today, upcoming] = await getWeather();

            // today
            if (document.querySelector('.forecasts') !== null) {
                document.querySelector('.forecasts').remove();
            }
            const forecasts = e('div', {class: 'forecasts'});
            todayForecast.appendChild(forecasts);
            const symbolSpan = e('span', {class: 'condition symbol'}, `${symbols[Object.values(today.forecast.condition).join('')]}`);
            forecasts.appendChild(symbolSpan);
            const conditionSpan = e('span', {class: 'condition'});
            forecasts.appendChild(conditionSpan);
            const cityName = Object.values(today.name).join('');
            const [condition, high, low] = Object.values(today.forecast); // ["Sunny", "19", "8"]
            const citySpan = e('span', {class: 'forecast-data'}, `${cityName}`);
            conditionSpan.appendChild(citySpan);
            const degreesSpan = e('span', {class: 'forecast-data'}, `${low}${symbols['Degrees']}/${high}${symbols['Degrees']}`);
            conditionSpan.appendChild(degreesSpan);
            const conditionData = e('span', {class: 'forecast-data'}, `${condition}`);
            conditionSpan.appendChild(conditionData);

            // upcoming
            if (document.querySelector('.forecast-info') !== null) {
                document.querySelector('.forecast-info').remove();
            }
            const forecastInfo = e('div', {class: 'forecast-info'});
            upcomingForecast.appendChild(forecastInfo);

            for (let i = 0; i < 3; i++) {
                const upcomingSpan = e('span', {class: 'upcoming'});
                forecastInfo.appendChild(upcomingSpan);
                const [condition, high, low] = Object.values(upcoming.forecast[i]);
                let symbolSpan = e('span', {class: 'symbol'}, `${symbols[Object.values(upcoming.forecast[i].condition).join('')]}`);
                upcomingSpan.appendChild(symbolSpan);
                let degreesSpan = e('span', {class: 'forecast-data'}, `${low}${symbols['Degrees']}/${high}${symbols['Degrees']}`);
                upcomingSpan.appendChild(degreesSpan);
                let conditionData = e('span', {class: 'forecast-data'}, `${condition}`);
                upcomingSpan.appendChild(conditionData);
            }

        } catch (err) {
            document.querySelector('#forecast').innerHTML = '<div id="current"><div class="label">Error</div></div>';
        }

        forecast.style.display = 'block';
    });
}

attachEvents();

async function getWeather() {
    const city = document.getElementById('location').value;
    const code = await getCode(city);

    const [today, upcoming] = await Promise.all([
        getToday(code),
        getUpcoming(code)
    ]);

    return [today, upcoming];
}

async function getCode(city) {
    const url = `http://localhost:3030/jsonstore/forecaster/locations`;

    const response = await fetch(url);
    const data = await response.json();

    const code = data.find(x => x.name.toLowerCase() === city.toLowerCase()).code;

    return code;
}

async function getToday(code) {
    const url = `http://localhost:3030/jsonstore/forecaster/today/${code}`;

    const response = await fetch(url);
    const data = await response.json();

    return data;
}

async function getUpcoming(code) {
    const url = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;

    const response = await fetch(url);
    const data = await response.json();

    return data;
}

// my function for creating DOM elements
function e(type, attributes, text) {
    const el = document.createElement(type);
    for (let key in attributes) {
        el.setAttribute(key, attributes[key]);
    }
    if (text) {
        el.textContent = text;
    }
    return el;
}