var temp;
var humidity;
var precipitation;


$(document).ready(function()){

	$.ajax({
		url: 'http://api.openweathermap.org/data/2.5/weather?id=1835848&units=metric&APPID=7425438545a87f72f8e3b5ce7175bc40'
		dataType: 'jsonp',
		success: function(results){
			temp = results.main.temp;
			humidity = results.main.humidity;
			precipitation = results.main.precipitation;

			myWeatherInterpretation();
		}
	})
}

function myWeatherInterpretation(){
	$('p').append('temp:' + temp);
	$('p').append('humidity: ' + humidity);
	$('p').append('precipitation: ' + precipitation);
}


///////////////////////part2
    $.ajax({
		url: 'http://api.openweathermap.org/data/2.5/weather?id=3410315&units=metric&APPID=7425438545a87f72f8e3b5ce7175bc40'
		dataType: 'jsonp',
		success: function(results){
			temp2 = results.main.temp;
			humidity2 = results.main.humidity;
			precipitation2 = results.main.precipitation;
			
			myWeatherInterpretation();
		}
	})
}

function myWeatherInterpretation(){
	$('p').append('temp:' + temp2);
	$('p').append('humidity: ' + humidity2);
	$('p').append('precipitation: ' + precipitation2);
}



///////////////////////part3
    $.ajax({
		url: 'http://api.openweathermap.org/data/2.5/weather?id=3186886&units=metric&APPID=7425438545a87f72f8e3b5ce7175bc40'
		dataType: 'jsonp',
		success: function(results){
			temp3 = results.main.temp;
			humidity3 = results.main.humidity;
			precipitation3 = results.main.precipitation;

			myWeatherInterpretation();
		}
	})
}

function myWeatherInterpretation(){
	$('p').append('temp:' + temp3);
	$('p').append('humidity: ' + humidity3);
	$('p').append('precipitation: ' + precipitation3);
}
