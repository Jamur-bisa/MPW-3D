function updateClock() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    if (hour.toString().length < 2) {
        hour = '0' + hour;
    }
    if (minute.toString().length < 2) {
        minute = '0' + minute;
    }
    if (second.toString().length < 2) {
        second = '0' + second;
    }

    document.getElementById('hour').textContent = hour;
    document.getElementById('minute').textContent = minute;
    document.getElementById('second').textContent = second;
}

setInterval(updateClock, 1000);