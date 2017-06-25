"use strict"

window.onload = function() {

	var start = document.getElementById("start");
	start.onclick = function() {
		var audioPip = document.getElementById("pip"); 
		var textBox = document.getElementById("text");
		textBox.classList.add("text-box-active");
		audioPip.setAttribute("src", "test-files/assets/pip.mp3");
	}

	var stop = document.getElementById("stop");
	stop.onclick = function() {
		var wrapper = document.getElementById("face");
		var audio = document.getElementById("audio");
		wrapper.classList.add("face-active");
		audio.setAttribute("src", "test-files/assets/audio.mp3");
	}

	var rulesBtn = document.getElementById("rules-btn");
	var rulesBox = document.getElementById("rules")
	rulesBox.classList.add("rules-box-active");
	rulesBtn.onclick = function() {
		rulesBox.classList.add("rules-box-hidden");
	}
}

