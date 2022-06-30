let a, date, time;
var am_pm = 'AM';
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
setInterval(() => {
    a = new Date();
    date = a.toLocaleDateString(undefined, options);
    let hrs = a.getHours().toString();
    let min = a.getMinutes().toString();
    let sec = a.getSeconds().toString();
    if (hrs > 12)
        am_pm = 'PM';
    else
        am_pm = 'AM';
    time = hrs.padStart(2, '0') + ":" + min.padStart(2, '0') + ":" + sec.padStart(2, '0') + " " + am_pm;
    document.getElementById('time').innerHTML = time + "<br> on " + date;
}, 1000);
