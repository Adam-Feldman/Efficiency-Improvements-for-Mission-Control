function simpleCount() {
  var currTime = 10;    
  for (var i = 1; i < 12; i++) {
    setTimeout(function () {
      document.getElementById("countdownTimer").innerHTML = "The time left is " + currTime;
      currTime = currTime - 1;
    }, 1000 * i);
  }
}