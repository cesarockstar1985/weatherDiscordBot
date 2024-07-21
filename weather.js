const axios = require('axios');
const os = require('os');
const { execSync } = require('child_process');

require ('dotenv').config();

const { OPENWEATHER_API_KEY } = process.env;

const getWeather = async (city) => {
  try {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}&units=metric&lang=es`;
    const response = await axios.get(url);
    const { weather, main } = response.data;
    return `El clima en ${city} es ${weather[0].description} con una temperatura de ${main.temp}°C.`;
  } catch (error) {
    console.error(error);
    return "Sorry, I couldn't fetch the weather for you.";
  }
}

module.exports = { getWeather };