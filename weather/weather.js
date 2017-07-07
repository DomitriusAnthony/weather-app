const request = require('request');

var getWeather = (lat, lng, callback) => {
	request({
		url: `https://api.darksky.net/forecast/a9adbbfe5e0ea1bf2874ae37c9e33ba8/${lat},${lng}`,
		json: true
	}, (error, response, body) => {
		if (error){
			callback('Unable to connect to Forecast.io server');
		} else if (!error && response.statusCode === 200){
			callback(undefined, {
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature
			});
		} else {
			console.log('Unable to fetch weather');
		}

})
};

module.exports.getWeather = getWeather;