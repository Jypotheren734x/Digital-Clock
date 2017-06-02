/**
 * Created by komar on 6/2/2017.
 */
var hex = '#hhmmss';
var time = 'hh:mm:ss';
var hour = 12;
var minute = 0;
var second = 0;
var hour_deg = hour * 30;
var min_deg = minute * 6;
var second_deg = second * 6;
var selected = null;
function $(el) {
	return document.getElementById(el);
}
$('hour').addEventListener("click", function () {
	$('hour_edit').classList.remove('hidden');
	$('hour_edit').setAttribute("placeholder", this.innerHTML);
	this.classList.add('hidden');
},false);

$('minute').addEventListener("click", function () {
	$('minute_edit').classList.remove('hidden');
	$('minute_edit').setAttribute("placeholder", this.innerHTML);
	this.classList.add('hidden');
},false);


$('second').addEventListener("click", function () {
	$('second_edit').classList.remove('hidden');
	$('second_edit').setAttribute("placeholder", this.innerHTML);
	this.classList.add('hidden');
},false);

$('hour_edit').addEventListener("keypress", function (e) {
	if(e.keyCode === 13){
		$('hour').classList.remove('hidden');
		hour = this.value;
		hour_deg = hour * 30;
		$('hour-hand').style.transform = "rotate(" + hour_deg + 'deg)';
		this.classList.add('hidden');
	}
},false);

$('minute_edit').addEventListener("keypress", function (e) {
	if(e.keyCode === 13){
		$('minute').classList.remove('hidden');
		minute = this.value;
		min_deg = minute * 6;
		$('minute-hand').style.transform = "rotate(" + min_deg + 'deg)';
		this.classList.add('hidden');
	}
},false);

$('second_edit').addEventListener("keypress", function (e) {
	if(e.keyCode === 13){
		$('second').classList.remove('hidden');
		second = this.value;
		second_deg = second * 6;
		$('second-hand').style.transform = "rotate(" + second_deg + 'deg)';
		this.classList.add('hidden');
	}
},false);

$('second-hand').addEventListener("mousedown", function () {
	selected = this;
}, false);
$('minute-hand').addEventListener("mousedown", function () {
	selected = this;
}, false);
$('hour-hand').addEventListener("mousedown", function () {
	selected = this;
}, false);
document.addEventListener("mousemove", function () {
	if (selected !== null) {
		switch (selected) {
			case $('second-hand'):
				selected.style.transform = "rotate(" + second_deg + 'deg)';
				second_deg++;
				if (second_deg % 6 === 0) {
					second++;
					if (second >= 60) {
						second = 0;
					}
				}
				break;
			case $('minute-hand'):
				selected.style.transform = "rotate(" + min_deg + 'deg)';
				min_deg++;
				if (min_deg % 6 === 0) {
					minute++;
					if (minute >= 60) {
						minute = 0;
					}
				}
				break;
			case $('hour-hand'):
				selected.style.transform = "rotate(" + hour_deg + 'deg)';
				hour_deg++;
				if (hour_deg % 30 === 0) {
					hour++;
					if (hour > 12) {
						hour = 1;
					}
				}
				break;
		}
	}
	updateClock();
}, false);
document.addEventListener("mouseup", function () {
	selected = null;
}, false);
function updateClock() {
	var hour_str = hour;
	var minute_str = minute;
	var second_str = second;
	if (hour < 10) {
		if (hour_str[0] != '0') {
			hour_str = "0" + hour;
		}
	}
	if (minute < 10) {
		if (minute_str[0] != '0') {
			minute_str = "0" + minute;
		}
	}
	if (second < 10) {
		if (second_str[0] != '0') {
			second_str = "0" + second;
		}
	}
	hex = '#' + hour_str + minute_str + second_str;
	time = hour_str + ':' + minute_str + ':' + second_str;
	$('minute-hand').style.backgroundColor = hex;
	$('hour-hand').style.backgroundColor = hex;
	$('hour').innerHTML = hour_str;
	$('minute').innerHTML = minute_str;
	$('second').innerHTML = second_str;
}
