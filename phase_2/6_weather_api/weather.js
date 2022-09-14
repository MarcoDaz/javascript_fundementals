// uncomment timeout for periodic updates
const WeatherApi = require('./weatherApi');

class Weather {
  constructor(api = new WeatherApi()) {
    this.api = api;
    this.weatherData = null;
    this.fetchTimeoutId = null;
    this.displayWeatherTimeoutId = null;
  }

  fetch(city) {
    // clearTimeout(this.fetchTimeoutId);

    this.api.fetchWeatherData(city, (response) => {
      this.weatherData = response;
    });
    
    // this.fetchTimeoutId = setTimeout(() => {
    //   this.fetch(city);
    // }, 5000);
  }

  getWeatherData() {
    return this.weatherData;
  }

  displayWeather() {
    console.log('---------------')
    const time = new Date();
    console.log(`Time: ${time.toLocaleString('en-GB', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}`)
    
    // clearTimeout(this.displayWeatherTimeoutId);
    
    const data = this.getWeatherData()
    const display = {};
    display['City'] = data.name;
    display['Weather'] = data.weather[0].main;
    display['Temperature'] = data.main.temp;
    display['Feels Like'] = data.main.feels_like;
    display['Humidity'] = `${data.main.humidity}%`;

    for (const [key, value] of Object.entries(display)) {
      console.log(`${key}: ${value}`);
    };

    // log example:
    // City:         London
    // Weather:      Clouds
    // Temperature:  18.4
    // Feels like:   16.0
    // Humidity:     64%

    // this.displayWeatherTimeoutId = setTimeout(() => {
    //   this.displayWeather();
    // }, 3000);
  }
};

module.exports = Weather;

// weather = new Weather;
// weather.fetch('London');
// setTimeout(() => {
//   weather.displayWeather();
// }, 1000);