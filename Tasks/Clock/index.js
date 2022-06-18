console.log("Index.js");

let stopWatchSection = document.getElementById("stopWatchSection");
let alarmSetSection = document.getElementById("alarmSetSection");
let startTimeBtn = document.getElementById("TimerBtn");
let stopTimeBtn = document.getElementById("stopTimeBtn");
let resetTimeBtn = document.getElementById("resetTimeBtn");
let clockTime = document.getElementById("clockTime");
let alarmBtn = document.getElementById("alarmBtn");
let displayClockTime = document.getElementById("displayClockTime");
let timepicker = document.getElementById("timepicker");
let addAlarmBtn = document.getElementById("addAlarmBtn");
let audioRing = document.getElementById("audioRing");
let alarmDiv = document.getElementById("alarmDiv");

stopWatchSection.style.display = "none";
alarmSetSection.style.display = "none";

let currentHours, currentMinutes, currentSeconds, timeOfDay, timeStr;
let hours, mins, secs, watchstatus, interval, counter;
hours = mins = secs = counter = 0;
interval = null;
watchstatus = "stopped";

// function getTime(hours, mins, secs, time) {
// 	let Time = new Date();

// 	hours = Time.getHours();
// 	mins = Time.getMinutes();
// 	secs = Time.getSeconds();

// 	time = hours > 12 ? "PM" : "AM";

// 	hours = hours > 12 ? hours - 12 : hours;

// 	hours = hours == 0 ? 12 : hours;
// }

function clearAlarm() {
	// console.log("this");
	counter = 0;
	alarmDiv.innerHTML = "";
}

function addAlarmFun() {
	// console.log("fun");
	counter++;
	let time = timepicker.value;
	// console.log(time);
	let splittedTime = time.split(":");
	setInterval(() => {
		let currentTime = new Date();

		currentHours = currentTime.getHours();
		currentMinutes = currentTime.getMinutes();
		currentSeconds = currentTime.getSeconds();

		if (splittedTime[0] == currentHours) {
			if (splittedTime[1] == currentMinutes) {
				audioRing.play();
			}
		}
	}, 1000);
	// let alarmDivHTML = "";
	let timealarm;
	// console.log(splittedTime[0]);
	timealarm = splittedTime[0] > 11 ? "PM" : "AM";
	// console.log(timealarm);

	// console.log(splittedTime);
	// let splitedHour = splittedTime[0];
	// let splitedmin = splittedTime[1];
	alarmDivHTML = `<b>${counter}->${splittedTime[0]} : ${splittedTime[1]} ${timealarm}</b><br>`;
	// console.log(alarmDivHTML);
	alarmDiv.innerHTML += alarmDivHTML;
	timepicker.value = `00:00`;
}

function resetTime() {
	hours = mins = secs = 0;
	let countHTML = "";
	countHTML = `0${hours} : 0${mins} : 0${secs}`;
	displayClockTime.innerHTML = countHTML;
	window.clearInterval(interval);
	startTimeBtn.innerHTML = "Start Timer";
}

function startTimer() {
	secs++;
	secs = secs < 10 ? `0${secs}` : secs;

	if (secs % 60 == 0) {
		// console.log(secs);
		secs = 0;
		mins++;
		mins = mins < 10 ? `0${mins}`.toString() : mins;

		if (mins % 60 == 0) {
			// console.log(mins);
			hours++;
			hours = hours < 10 ? `0${hours}`.toString() : hours;

			// console.log(hours);
		}
	}

	let countHTML = "";

	countHTML = `${hours} : ${mins} : ${secs}`;

	displayClockTime.innerHTML = countHTML;

	// console.log("fun");

	// let firstTime = new Date();
	// let secondTime = new Date();
	// let newHours = secondTime.getHours();
	// let newMinutes = secondTime.getMinutes();
	// let newSeconds = secondTime.getSeconds();

	// newHours = newMinutes = newSeconds = 0;
	// setInterval(() => {
	// console.log(currentHours, currentMinutes, currentSeconds);
	// let newTime = new Date();
	// let countHours, countMinutes, countSeconds;

	// console.log(newHours, newMinutes, newSeconds);

	// countHours = newHours - firstTime.getHours();
	// countMinutes = newMinutes - firstTime.getMinutes();
	// countSeconds = newSeconds - firstTime.getSeconds();
	// countHours = 0 + firstTime.getHours();
	// countMinutes = 0 + firstTime.getMinutes();
	// countSeconds = 0 + firstTime.getSeconds();

	// console.log(hours, mins, secs);

	// }, 1000);
}
function startStop() {
	if (watchstatus === "stopped") {
		//Start the stopwatch (by calling the setInterval() function)
		interval = window.setInterval(startTimer, 1000);
		startTimeBtn.innerHTML = "Stop Timer";
		watchstatus = "started";
	} else {
		window.clearInterval(interval);
		startTimeBtn.innerHTML = "Start Timer";
		watchstatus = "stopped";
	}
}

function alarmSet() {
	// console.log("AlarmSet");
	stopWatchSection.style.display = "none";
	alarmSetSection.style.display = "block";
}

function stopWatchCall() {
	// console.log("stopWatchCall");
	alarmSetSection.style.display = "none";
	stopWatchSection.style.display = "block";
}

function updateClock() {
	let currentTime = new Date();

	currentHours = currentTime.getHours();
	currentMinutes = currentTime.getMinutes();
	currentSeconds = currentTime.getSeconds();

	currentHours = currentHours < 10 ? `0${currentHours}` : currentHours;
	currentMinutes = currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes;
	currentSeconds = currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds;

	timeOfDay = currentHours > 12 ? "PM" : "AM";

	currentHours = currentHours > 12 ? currentHours - 12 : currentHours;

	currentHours = currentHours == 0 ? 12 : currentHours;

	timeStr = `${currentHours} : ${currentMinutes} : ${currentSeconds}  ${timeOfDay}`;

	// console.log(timeStr);
	clockTime.innerHTML = timeStr;
}
// console.log("");
// console.log("ajskaj");

// getTime();
// let x = getTime();
// console.log(x);
