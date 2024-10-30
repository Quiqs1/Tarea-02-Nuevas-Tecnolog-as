const apiKey = 'e50d07f0a9012f4daee797438359cb0c';

document.getElementById('getWeather').addEventListener('click', function () {
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ciudad no encontrada');
            }
            return response.json();
        })
        .then(data => {
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;

            document.getElementById('weather').innerHTML = `
                <h2>Clima en ${city}</h2>
                <p>Temperatura: ${temperature} °C</p>
                <p>Descripción: ${weatherDescription}</p>
            `;

            const soleadoImg = document.getElementById('soleado');
            const nubladoImg = document.getElementById('nublado');
            const lluviosoImg = document.getElementById('lluvioso');

            soleadoImg.style.display = 'none';
            nubladoImg.style.display = 'none';
            lluviosoImg.style.display = 'none';

            if (weatherDescription.includes('soleado') || weatherDescription.includes('clear')) {
                soleadoImg.style.display = 'block';
            } else if (weatherDescription.includes('nublado') || weatherDescription.includes('clouds')) {
                nubladoImg.style.display = 'block';
            } else if (weatherDescription.includes('lluvia') || weatherDescription.includes('rain')) {
                lluviosoImg.style.display = 'block';
            }
        })
        .catch(error => {
            document.getElementById('weather').innerHTML = `
                <p style="color: red;">${error.message}</p>
            `;
        });
});