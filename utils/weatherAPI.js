async function getWeather() {
  const weatherDisplay = document.getElementById('weather');
  const weather = await axios.get('http://localhost:5000/api/weather');
  weatherDisplay.innerHTML = `${weather.data.temperature}°F`;
}

getWeather();
