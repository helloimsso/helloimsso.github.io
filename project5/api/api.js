$(function() {
  console.log('weather');

var url = 'https://api.openweathermap.org/data/2.5/weather?id=3410315&units=metric&APPID=7425438545a87f72f8e3b5ce7175bc40'
  $.get(url, function(data) {

    console.log(data);
    
    var temperature = data.main.temp;
    console.log('temperature',temperature);

    if (temperature < 15) {
        $('#eggyolk').css("background-color","red");
    }
    else if (temperature >= 20) {
        $('#eggyolk').css("background-color","orange");
    }
    else if (temperature >= 10 & temperature <= 20) {
        $('#eggyolk').css("background-color","pink");
    }

    var humidity = data.main.humidity;
    console.log('humidity',humidity);

    if (humidity < 10) {
        $('#eggyolk').css("opacity","1");
    }
    else if (humidity >= 30) {
        $('#eggyolk').css("opacity","0.7");
    }
    else if (humidity >= 50 & humidity <= 70) {
        $('#eggyolk').css("opacity","0.5");
    }

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

     if (temperature < 20) {
         $('#coke').css("background-color","red");
     }
     else if (temperature >= 20) {
         $('#coke').css("background-color","orange");
    }
    else if (temperature >= 10 & temperature <= 20) {
       $('#coke').css("background-color","pink");
   }

     var humidity = data.main.humidity;
   console.log('humidity',humidity);

   if (humidity < 10) {
      $('#coke').css("opacity","1");
   }
   else if (humidity >= 30) {
       $('#coke').css("opacity","0.7");
   }
 else if (humidity >= 50 & humidity <= 70) {
     $('#coke').css("opacity","0.5");
    }

  });

});
    
//////brasilia
$(function() {
  console.log('weather');

  var url = 'http://api.openweathermap.org/data/2.5/weather?id=3410315&units=metric&APPID=7425438545a87f72f8e3b5ce7175bc40'
   $.get(url, function(data) {

     console.log(data);
    
     var temperature = data.main.temp;
     console.log('temperature',temperature);

     if (temperature < 20) {
         $('#coke').css("background-color","red");
     }
     else if (temperature >= 20) {
         $('#coke').css("background-color","orange");
    }
    else if (temperature >= 10 & temperature <= 20) {
       $('#coke').css("background-color","pink");
   }

     var humidity = data.main.humidity;
   console.log('humidity',humidity);

   if (humidity < 10) {
      $('#coke').css("opacity","1");
   }
   else if (humidity >= 30) {
       $('#coke').css("opacity","0.7");
   }
 else if (humidity >= 50 & humidity <= 70) {
     $('#coke').css("opacity","0.5");
    }

  });

});
    



    





 

    





 

    





 



 