import axios from 'axios';

const weatherDisplay = document.getElementById('weather');

function getWeather() {
  const weather = axios.get('http://localhost:5000/api/weather').then(data => JSON.parse(data));
  weatherDisplay.innerHTML = weather;
}