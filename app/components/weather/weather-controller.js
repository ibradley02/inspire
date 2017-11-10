function WeatherController(){
	var weatherService = new WeatherService();

	var kelvin = '°K'
	var celsius = '°C'
	var farenheit = '°F'

//GET WEATHER DATA FROM SERVICE
	weatherService.getWeather(function(weather){
		console.log(weather)
		drawWeather(weather)	
	})
//DRAW WEATHER DATA TO SCREEN
	function drawWeather(weather){
		var weatherElem = document.getElementById('weather')
		var template = ''
		template += `
			<div class="col-xs-3 col-xs-offset-9">
			<div class="row">
				<div class="col-xs-6">${weather.weather[0].main}</div>
				<div class="col-xs-6">${weather.name}</div>
			</div>
			<div class="row">
				<div class="col-xs-6 col-xs-offset-3">Temp: ${weather.main.temp + kelvin}</div>
			</div>
			<div class="row">
				<div class="col-xs-6">Highest Temp: ${weather.main.temp_max} + kelvin</div>
				<div class="col-xs-6">Lowest Temp: ${weather.main.temp_min} + kelvin</div>
			</div>
		</div>
			`
		weatherElem.innerHTML = template
		
	}

}
