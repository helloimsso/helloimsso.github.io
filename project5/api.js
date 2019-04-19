
var temp; //Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit. 
var humidity; //Humidity, %
var weathertext; //Group of weather parameters (Rain, Snow, Extreme etc.)


$(document).ready(function(){


    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=1835848&units=metric&APPID=7425438545a87f72f8e3b5ce7175bc40', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            temp = results.main.temp;
            humidity = results.main.humidity;
        

            myWeatherInterpretation();

        }
    });
    

    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH
       
        $('p').append('temp: ' + temp);
        $('p').append('humidity: ' + humidity);
        $('p').append('weathertext: ' + weathertext);
        
        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   


});