require('dotenv').config();

async function getWeather() {
  const weatherDisplay = document.getElementById('weather');
  const weather = await axios.get(
    'https://flowhome-server.herokuapp.com/api/weather'
  );
  weatherDisplay.innerHTML = `${weather.data.temperature}°F`;
}

getWeather();
