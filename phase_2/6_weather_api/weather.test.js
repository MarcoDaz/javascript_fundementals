const Weather = require('./weather');

describe('Weather', () => {
  it('returns weather data for London', () => {
    const mockApi = {
      fetchWeatherData: (city, callback) => {
        callback({ name: 'London' });
      }
    };
    const weather = new Weather(mockApi);

    weather.fetch('London');
    response = weather.getWeatherData();

    expect(response).toEqual({ name: 'London' })
  });
});;