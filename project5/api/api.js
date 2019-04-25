
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

    if (humidity < 10) {
        $('#eggyolk').css("opacity","20%");
    }
    else if (humidity >= 30) {
        $('#eggyolk').css("opacity","60%");
    }
    else if (humidity >= 50 & humidity <= 70) {
        $('#eggyolk').css("opacity","100%");
    }

  });


});


    




