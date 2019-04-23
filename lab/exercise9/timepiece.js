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
  var g = parseInt(s) * 4;
  var b = parseInt(s) * 7;
  document.body.style.backgroundColor = 
  'rgb(' + r + ',' + g + ',' + b + ')';
  var t = setTimeout(startTime, 500);


}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  
  return i;
}

time();


