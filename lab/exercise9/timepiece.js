function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML =
  h + ":" + m + ":" + s;
  var r = parseInt(s) * 5;
  var g = parseInt(s) * 7;
  var b = parseInt(s) * 9;
  document.body.style.backgroundColor = 
  'rgb(' + r + ',' + g + ',' + b + ')';
  var t = setTimeout(startTime, 500);
     if (m == 10) {
    $('.smile').css("color",'purple');
    } else if (m == 20) {
        $('.smile').css("color",'navy');
    } else if (m == 30) {
        $('.smile').css("color",'orange')
    } else if (m == 40) {
        $('.smile').css("color",'pink')
    } else if (m == 50) {
        $('.smile').css("color",'gold')
    }   
    else if (m == 0) {
        $('.smile').css("color",'white')
    }          
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  
  return i;
}




