
$(function() {
  console.log('weather');

var url = 'https://api.openweathermap.org/data/2.5/weather?id=3410315&units=metric&APPID=7425438545a87f72f8e3b5ce7175bc40'
  $.get(url, function(data) {

    console.log(data);
    
    var temperature = data.main.temp;
    console.log('temperature',temperature);

    if (temperature < 20) {
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

    if (humidity < 50) {
        $('.humidity').css("opacity","30%");
    }
    else if (humidity >= 50) {
        $('.humidity').css("opacity","70%");
    }
    else if (humidity >= 40 & humidity <= 50) {
        $('.humidity').css("opacity","100%");
    }

  });


});


    




