alert ("Welcome! Please view console on your browser.");

var myName = "sohyun lim";
console.log(myName);

var myNumber = 20;
console.log(myNumber);

var myFood = "hotdog is my favorite";
console.log(myFood);

var call = true;
console.log(call);

var myMy = myNumber + myFood; 
console.log (myMy);
console.log(3 * 8);
console.log(48 / 2);
console.log(12 + 12);
console.log(4 * 6);


var countries = ["Croatia", "Argentina", "Russia"];
console.log(countries[0]);
console.log(countries.length);

var currentTime = "The current time is";
var time = new Date().getHours() + ":" + new Date().getMinutes();
console.log(currentTime + time)

var currentHour = new Date().getHours();
if(currentHour == 11) 
{console.log("it is 11 now")}
else {console.log("it is not 11 yet.")};

console.log (myName.length);
myName = myName.length - 1;

if (myName <= 9) 
  {console.log("My name is relatively short.")
} else if (myName >= 14) 
  {console.log("My name is relatively long.")
} else 
  {console.log("My name is neither short nor long.")
};

// 9 temperatures
var calTemp = function(num) 
{return (num - 32) * (5/9);}
var koreaTemp = (calTemp(48));
var currentTemp = (calTemp(46));
console.log(koreaTemp);
console.log("The temperature in Korea is" + (calTemp(koreaTemp)) + "°C at")
console.log(currentTemp);
console.log("The temperature in NewYork is" + (calTemp(currentTemp)) + "°C at")  

//10
$(document).ready(function(){
for(var counter=0; counter<10; counter++){
if(counter%2 == 0){
var my1 = '<p style="color:salmon; padding-right:500px">HELLO</p>';
$('.mybox').append(my1); 
}else {
var my2 = '<p style="color:teal; padding-left:200px">안녕</p>';
$('.mybox').append(my2); 
}
}
});

$('#mybox').ready(function(){
$('.mybox').append('<p class="newstyle">xxxxxxxxxxxxxxxxxxxxxxxxx</p>');
});

//mathtandom
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
console.log(Math.random());