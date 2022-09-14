const got = require('got');
const apiUrl = require('./apiUrl');

class WeatherApi {
  fetchWeatherData(city, callback) {
    got(apiUrl(city)).then((response) => {
      const responseObj = JSON.parse(response.body);
      callback(responseObj);
    });
  }

}

module.exports = WeatherApi;

// test:
// const api = new WeatherApi();
// api.fetchWeatherData('London', res => console.log(res));