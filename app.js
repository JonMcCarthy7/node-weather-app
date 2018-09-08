// const yargs = require("yargs");

// const geocode = require("./geocode/geocode");

// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: "address",
//       describe: "Address to fetch weather for",
//       string: true
//     }
//   })
//   .help()
//   .alias("help", "h").argv;

// geocode.geocodeAddress(argv.a, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });

const request = require("request");

request(
  {
    url:
      "https://api.darksky.net/forecast/4551dd5bc038a5e070c8a6f30ca46e99/33.420717,-111.874065",
    json: true
  },
  (error, response, body) => {
    if (!error && response.statusCode === 200) {
      console.log(body.currently.temperature);
    } else {
      console.log("Unable to fetch weather");
    }
  }
);
