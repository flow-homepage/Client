import axios from 'axios';

function getWeather() {
  const weather = axios.get('http://localhost:5000/api/weather')
  document.getElementById('weather').innerHTML = weather;
}