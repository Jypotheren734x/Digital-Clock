/**
 * Created by komar on 6/2/2017.
 */
var hex = '#hhmmss';
var time = 'hh:mm:ss';
function updateClock() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    if(minute < 10){
        minute = "0"+minute;
    }
    if(hour < 10){
        hour = "0" + hour;
    }
    if(second <10){
        second = "0"+second;
    }
    hex = '#'+hour+minute+second;
    time = hour+':'+minute+':'+second;
    second_deg = second *6;
    document.getElementById('minute-hand').style = "background-color: "+hex;
    document.getElementById('hour-hand').style = "background-color: "+hex;
    document.getElementById('digital').innerHTML = time;
    document.getElementById('second-hand').style.webkitTransform = 'rotate('+second_deg+'deg)';
    document.getElementById('second-hand').style.mozTransform    = 'rotate('+second_deg+'deg)';
    document.getElementById('second-hand').style.msTransform     = 'rotate('+second_deg+'deg)';
    document.getElementById('second-hand').style.oTransform      = 'rotate('+second_deg+'deg)';
    document.getElementById('second-hand').style.transform       = 'rotate('+second_deg+'deg)';
    if(second == 59){
        min_deg = minute*6;
        document.getElementById('minute-hand').style.webkitTransform = 'rotate('+min_deg+'deg)';
        document.getElementById('minute-hand').style.mozTransform    = 'rotate('+min_deg+'deg)';
        document.getElementById('minute-hand').style.msTransform     = 'rotate('+min_deg+'deg)';
        document.getElementById('minute-hand').style.oTransform      = 'rotate('+min_deg+'deg)';
        document.getElementById('minute-hand').style.transform       = 'rotate('+min_deg+'deg)';
    }
    if(minute == 59){
        hour_deg = hour*30;
        document.getElementById('hour-hand').style.webkitTransform = 'rotate('+hour_deg+'deg)';
        document.getElementById('hour-hand').style.mozTransform    = 'rotate('+hour_deg+'deg)';
        document.getElementById('hour-hand').style.msTransform     = 'rotate('+hour_deg+'deg)';
        document.getElementById('hour-hand').style.oTransform      = 'rotate('+hour_deg+'deg)';
        document.getElementById('hour-hand').style.transform       = 'rotate('+hour_deg+'deg)';
    }
    setTimeout(updateClock, 1000);
}
function invertColor(hex, bw) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    var r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);
    if (bw) {
        // http://stackoverflow.com/a/3943023/112731
        return (r * 0.299 + g * 0.587 + b * 0.114) > 186
            ? '#000000'
            : '#FFFFFF';
    }
    // invert color components
    r = (255 - r).toString(16);
    g = (255 - g).toString(16);
    b = (255 - b).toString(16);
    // pad each with zeros and return
    return "#" + padZero(r) + padZero(g) + padZero(b);
}
updateClock();