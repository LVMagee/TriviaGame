$(document).ready(function() {

function initialScreen() {
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-warning btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
	$(".mainArea").html(startScreen);
}

initialScreen();


$("body").on("click", ".start-button", function(event){
	generateHTML();

	timerWrapper();

});

$("body").on("click", ".answer", function(event){
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {

		clearInterval(theClock);
		generateWin();
	}
	else {
		clearInterval(theClock);
		generateLoss();
	}
}); 

$("body").on("click", ".reset-button", function(event){
	resetGame();
}); 

});  

function generateLossDueToTimeOut() {
	unanswered++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Times UP!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/skull.jpg'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 2 * 1000);  
}

function generateWin() {
	correct++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter];
	$(".mainArea").html(gameHTML);
	setTimeout(wait,  1000);  
}

function generateLoss() {
	incorrect++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Oops! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/skull.jpg'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 2 * 1000); 
}

function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".mainArea").html(gameHTML);
}

function wait() {
	if (questionCounter < 7) {
	questionCounter++;
	generateHTML();
	counter = 30;
	timerWrapper();
	}
	else {
		finalScreen();
	}
}

function timerWrapper() {
	theClock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function finalScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Let's see how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correct + "</p>" + "<p>Wrong Answers: " + incorrect + "</p>" + "<p>Unanswered: " + unanswered + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-danger btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".mainArea").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correct = 0;
	incorrect = 0;
	unanswered = 0;
	counter = 30;
	generateHTML();
	timerWrapper();
}

var startScreen;
var gameHTML;
var counter = 30;
var questionArray = ["The adult skeleton has how many bones?", "What is the largest bone in the body?", "What part of the skeleton has 54 bones?", "Bones on the tv show is what?", "How many bones do babies have?", "Where is the most common area for a break?", "What is the difference between a break and fracture?", "Evel Knievel broke 433 bones over his life time. How did he break most of them?"];
var answerArray = [["300", "206", "275", "187"], ["femur","spine","tibia","skull"], ["foot", "ribs", "spine", "hand"], ["pathologist","detective","forensic anthropologist","orthopaedic doctor"], ["175", "300", "206", "130"], ["wrist/hand","spine","skull","ankle/foot"], ["severity","location","complication","no difference"], ["sky diving","ultimate fighting","motorcycle jumping","stuntman"]];
var correctAnswers = ["B. 206", "A. femur", "D. hand", "C. forensic anthropologist", "B. 300", "A. wrist/hand", "D. no difference", "C. motorcycle jumping"];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
