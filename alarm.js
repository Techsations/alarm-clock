let hour = document.getElementById('hours');
let minutes = document.getElementById('mins');
let seconds = document.getElementById('secs');
let setHour = document.getElementById('alarmHour');
let setMinutes = document.getElementById('alarmMinutes')
let display = document.getElementById('set-Alarm')
let audio = document.getElementById('playAudio')

function time() {
    let date = new Date();
    hour.innerHTML = date.getHours();
    minutes.innerHTML = date.getMinutes();
    seconds.innerHTML = date.getSeconds();
    if (seconds.innerHTML < 10) {
        seconds.innerHTML = "0" + seconds.innerHTML;
    }

    if (minutes.innerHTML < 10) {
        minutes.innerHTML = "0" + minutes.innerHTML;
    }

    if (hour.innerHTML < 10) {
        hour.innerHTML = "0" + hour.innerHTML;
    }
    }
    setInterval(time, 1000)

    function setAlarm() {
        setHour.value = setHour.value;
        setMinutes.value = setMinutes.value;
        display.innerHTML = ("Alarm is set for " + setHour.value + ":" + setMinutes.value);
        // console.log(display.innerHTML);
    }

    function period() {
        if (hour.innerHTML === setHour.value && minutes.innerHTML === setMinutes.value) {
           display.innerHTML = "Alarm is Ringing!!...";
           audio.play();
           setTimeout(()=> {
                display.innerHTML = ("Alarm Off!");
                audio.pause();
           }, 60000)
        }      
    }

    setInterval(period, 1000);