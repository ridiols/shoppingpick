function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  var interval = setInterval(function () {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);
    miliseconds = parseInt(timer % 360, 10); 


    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    miliseconds = miliseconds < 10 ? "0" + miliseconds : miliseconds;

    display.textContent = minutes + ":" + seconds + ":" + miliseconds;

    if (--timer < 0) {
      timer = duration;
    }
    if(timer === 0) {
      clearInterval(interval);
      display.textContent = "세션 만료!";
    }
  }, 1000);
}

window.onload = function () {
  /* 기본값 10(분)입니다. */
  var minutes = 10;
  var fiveMinutes = (60 * minutes) - 1,
    display = document.querySelector('#MyTimer');
  startTimer(fiveMinutes, display);
};