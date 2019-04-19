
var temp; 
var humidity; //Humidity, %
var weathertext; //Group of weather parameters (Rain, Snow, Extreme etc.)


$(document).ready(function(){


    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?id=1835848&units=metric&APPID=7425438545a87f72f8e3b5ce7175bc40', //CHANGE THE URL TO YOUR API QUERY
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
        
       
        $('p').append('temp: ' + temp);
        $('p').append('humidity: ' + humidity);
        $('p').append('weathertext: ' + weathertext);
        
        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   


});

///part2
$(document).ready(function(){
    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?id=3410315&units=metric&APPID=7425438545a87f72f8e3b5ce7175bc40', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext2 = results.weather[0].main;
            temp2 = results.main.temp;
            humidity2 = results.main.humidity;
        

            myWeatherInterpretation();

        }
    });
    

    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
       
        $('p2').append('temp: ' + temp2);
        $('p2').append('humidity: ' + humidity2);
        $('p2').append('weathertext: ' + weathertext2);
        
        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   
});

///part3
$(document).ready(function(){
    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?id=3186886&units=metric&APPID=7425438545a87f72f8e3b5ce7175bc40', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext3 = results.weather[0].main;
            temp3 = results.main.temp;
            humidity3 = results.main.humidity;
        

            myWeatherInterpretation();

        }
    });
    

    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
       
        $('p3').append('temp: ' + temp3);
        $('p3').append('humidity: ' + humidity3);
        $('p3').append('weathertext: ' + weathertext3);
        
        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   
});






