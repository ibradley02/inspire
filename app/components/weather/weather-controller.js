function WeatherController() {
	var weatherService = new WeatherService();
	var fahrenheit = '°F'

	//GET WEATHER DATA FROM SERVICE
	weatherService.getWeather(function (weather) {
		console.log(weather)
		drawWeather(weather)
	})
	//DRAW WEATHER DATA TO SCREEN
	function drawWeather(weather) {
		var weatherElem = document.getElementById('weather')
		var template = ''
		var temp = `${(weather.main.temp * (9 / 5) - 459.67).toFixed(2) + fahrenheit}`
		var tempHigh = `${(weather.main.temp_max * (9 / 5) - 459.67).toFixed(2) + fahrenheit}`
		var tempLow = `${(weather.main.temp_min * (9 / 5) - 459.67).toFixed(2) + fahrenheit}`
		template += `
			<div class="col-xs-3 col-xs-offset-9 blackbox">
			<div class="row">
				<div class="col-xs-6">${weather.weather[0].main}</div>
				<div class="col-xs-6">${weather.name}</div>
			</div>
			<div class="row">
				<div class="col-xs-6 col-xs-offset-3">${temp}</div>
			</div>
			<div class="row">
				<div class="col-xs-6">High:${tempHigh}</div>
				<div class="col-xs-6">Low: ${tempLow}</div>
			</div>
		</div>
			`
		weatherElem.innerHTML = template

	}
}
