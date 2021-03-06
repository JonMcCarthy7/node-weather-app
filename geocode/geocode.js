const request = require("request");

const geocodeAddress = (address, callback) => {
  address = encodeURIComponent(address, callback);
  // console.log(address);

  request(
    {
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
      json: true
    },
    (error, response, body) => {
      if (error) {
        callback("Unable to connect to google servers.");
      } else if (body.status === "ZERO_RESULTS") {
        callback("Unable to find that address");
      } else if (body.status === "OK") {
        callback(undefined, {
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
    }
  );
};

module.exports.geocodeAddress = geocodeAddress;

// 4551dd5bc038a5e070c8a6f30ca46e99
