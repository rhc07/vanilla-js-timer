function helloworld(){
	console.log("hello world")
}

var milliseconds = 00;
var seconds = 00;
var minutes = 00;
var appendMilliseconds = document.getElementById('milliseconds');
var appendSeconds = document.getElementById('seconds');
var appendMinutes = document.getElementById('minutes');
var startButton = document.getElementById('button-start');
var stopButton = document.getElementById('button-stop');
var resetButton = document.getElementById('button-reset');
var mainPage = document.getElementById('main-timer')


function timerStart(){
 startButton.addEventListener('click', function() {
	 milliseconds++
		 appendMilliseconds.innerHTML = `${milliseconds}`
 })
}

function timerStop(){
 stopButton.addEventListener('click', function() {
	 helloworld()
 })
}

function timerReset(){
resetButton.addEventListener('click', function(){
	helloworld()
})
}

timerStart();
timerStop();
timerReset();