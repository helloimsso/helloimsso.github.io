
$( "html").click(function() 
{$( "#toggle,#toggle2,#toggle3").toggle( "explode" );
});



$(function() {
  console.log('weather');

  var url = 'https://api.openweathermap.org/data/2.5/weather?id=1835848&units=metric&APPID=7425438545a87f72f8e3b5ce7175bc40'
   $.get(url, function(data) {

     console.log(data);
    
    var temperature = data.main.temp;
    console.log('temperature',temperature);
    var temp; 
    var humidity; //Humidity, %
    var seoul_weathertext; //Group of weather parameters (Rain, Snow, Extreme etc.)


$(document).ready(function(){


    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?id=1835848&units=metric&APPID=7425438545a87f72f8e3b5ce7175bc40', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            seoul_weathertext = results.weather[0].main;
            temp = results.main.temp;
            humidity = results.main.humidity;
        

            myWeatherInterpretation();

        }
    });
    

    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
       
        $('p').append('temp: ' + temp +"</br>");
        $('p').append('humidity: ' + humidity +"</br>");
        $('p').append('weathertext: ' + seoul_weathertext +"</br>");

        console.log("temp: " + temp);
        console.log("humidity: " + humidity);
        console.log("weathertext: " + seoul_weathertext);

        if (temp <15) {
        $('#eggyolk').css("background-color","#5DADE2  ");
    }
    else if (temp >= 20) {
        $('#eggyolk').css("background-color","orange");
    }
    else if (temp >= 30 ) {
        $('#eggyolk').css("background-color","red");
    }

    if (humidity < 10) {
      $('#eggyolk').css("opacity","1");
   }
   else if (humidity >= 30) {
       $('#eggyolk').css("opacity","0.5");
   }
 else if (humidity >= 50 & humidity <= 70) {
     $('#eggyolk').css("opacity","0.7");
    }

    console.log('Seoul weathertext: ',seoul_weathertext);

    if (seoul_weathertext = "rain") {
      $('#eggyolk').css("width","200");
   }
   else if (seoul_weathertext = "haze") {
       $('#eggyolk').css("width","250");
   }
 else if (seoul_weathertext = "clear") {
     $('#eggyolk').css("width","300");
    }
    // console.log('humidity',humidity);

    
        
       
    }   


});

  });

});

//////zagreb
$(function() {
  console.log('weather');

  var url = 'https://api.openweathermap.org/data/2.5/weather?id=3186886&units=metric&APPID=7425438545a87f72f8e3b5ce7175bc40'
   $.get(url, function(data) {

     console.log(data);
    
    var temperature = data.main.temp;
    console.log('temperature',temperature);
    var temp; 
    var humidity; //Humidity, %
    var weathertext; //Group of weather parameters (Rain, Snow, Extreme etc.)


$(document).ready(function(){


    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?id=3186886&units=metric&APPID=7425438545a87f72f8e3b5ce7175bc40', //CHANGE THE URL TO YOUR API QUERY
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
        
       
        $('p1').append('temp: ' + temp +"</br>");
        $('p1').append('humidity: ' + humidity +"</br>");
        $('p1').append('weathertext: ' + weathertext +"</br>");

        console.log("temp: " + temp);
        console.log("humidity: " + humidity);
        console.log("weathertext: " + weathertext);

        if (temp <15) {
        $('#coke').css("border-color","#5DADE2  ");
    }
    else if (temp >= 20) {
        $('#coke').css("border-color","orange");
    }
    else if (temp >= 30 ) {
        $('#coke').css("border-color","red");
    }

    if (humidity < 10) {
      $('#coke').css("opacity","1");
   }
   else if (humidity >= 50 & humidity <= 70) {
       $('#coke').css("opacity","0.5");
   }
 else if (humidity >= 30) {
     $('#coke').css("opacity","0.7");
    }

    if (weathertext = "rain") {
      $('#coke').css("height","20");
   }
   else if (weathertext = "haze") {
       $('#coke').css("height","50");
   }
 else if (weathertext = "clear") {
     $('#coke').css("height","90");
    }
    console.log('humidity',humidity);
    // console.log('weathertext',weathertext);
        
       
    }   


});

  });

});
    





    
//////brasilia
$(function() {
  console.log('weather');

  var url = 'https://api.openweathermap.org/data/2.5/weather?id=3410315&units=metric&APPID=7425438545a87f72f8e3b5ce7175bc40'
   $.get(url, function(data) {

     console.log(data);
    
    var temperature = data.main.temp;
    console.log('temperature',temperature);
    var temp; 
    var humidity; //Humidity, %
    var weathertext; //Group of weather parameters (Rain, Snow, Extreme etc.)


$(document).ready(function(){


    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?id=3410315&units=metric&APPID=7425438545a87f72f8e3b5ce7175bc40', //CHANGE THE URL TO YOUR API QUERY
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
        
       
        $('p2').append('temp: ' + temp +"</br>");
        $('p2').append('humidity: ' + humidity +"</br>");
        $('p2').append('weathertext: ' + weathertext +"</br>");

        console.log("temp: " + temp);
        console.log("humidity: " + humidity);
        console.log("weathertext: " + weathertext);


        if (temp <15) {
        $('#pudding').css("border-color","#5DADE2  ");
    }
    else if (temp >= 30) {
        $('#pudding').css("border-color","red");
    }
    else if (temp >= 20 ) {
        $('#pudding').css("border-color","orange");
    }

    if (humidity < 10) {
      $('#pudding').css("opacity","1");
   }
   else if (humidity >= 30) {
       $('#pudding').css("opacity","0.5");
   }
 else if (humidity >= 50 & humidity <= 70) {
     $('#pudding').css("opacity","0.7");
    }

    if (weathertext = "rain") {
      $('#pudding').css("width","70");
   }
   else if (weathertext = "haze") {
       $('#pudding').css("width","50");
   }
 else if (weathertext = "clear") {
     $('#pudding').css("width","10");
    }
    console.log('humidity',humidity);
    // console.log('weathertext',weathertext);
        
       
    }   


});

  });

});
    



    





 

    





 

    





 



 