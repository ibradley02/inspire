function WeatherController(){
	var weatherService = new WeatherService();

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
				<div class="col-xs-3">${weather.weather[0].main}</div>
				<div class="col-xs-3 black">
				<button type="submit" onclick="app.controllers.weatherController.changeTempUnit(event)" class="btn btn-default">°C</button>
				</div>
				<div class="col-xs-3 black">
				<button type="submit" onclick="app.controllers.weatherController.changeTempUnit(event)" class="btn btn-default">°F</button>
				</div>
				<div class="col-xs-3">${weather.name}</div>
			</div>
			<div class="row">
				<div class="col-xs-6 col-xs-offset-3">${weather.main.temp + kelvin}</div>
			</div>
			<div class="row">
				<div class="col-xs-6">High: ${weather.main.temp_max + kelvin}</div>
				<div class="col-xs-6">Low: ${weather.main.temp_min + kelvin}</div>
			</div>
		</div>
			`
		weatherElem.innerHTML = template
		
	}
	this.changeTempUnit = function(e){
		
	}

}
