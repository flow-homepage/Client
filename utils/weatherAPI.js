require('dotenv').config();

async function getWeather() {
  const weatherDisplay = document.getElementById('weather');
  const weather = await axios.get(process.env.BACKEND_WEATHER_URL);
  weatherDisplay.innerHTML = `${weather.data.temperature}°F`;
}

getWeather();
