const request = require("request");

const getWeather = (lat, lng, callback) => {
  request(
    {
      url: `https://api.darksky.net/forecast/4551dd5bc038a5e070c8a6f30ca46e99/${lat},${lng}`,
      json: true
    },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        callback(undefined, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        });
      } else {
        callback("Unable to fetch weather");
      }
    }
  );
};

module.exports.getWeather = getWeather;
