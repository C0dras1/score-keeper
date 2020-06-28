var p1Display = document.querySelector("#p1Display");
var button1 = document.querySelector("button");
var b1score = 0;

var p2Display = document.querySelector("#p2Display");
var button2 = document.querySelector("#b2");
var b2score = 0

var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");

var button3 = document.querySelector("#b3");

var gameOver = false;
var winningScore = 5;


button1.addEventListener("click", function(){
	if(!gameOver){
		b1score++;
		if(b1score === winningScore){
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = b1score;
	}
});


button2.addEventListener("click", function(){
	if(!gameOver){
		b2score++;
		if(b2score === winningScore){
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = b2score;
	}
});

button3.addEventListener("click", function(){
	b1score = 0;
	b2score = 0;
	p1Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.textContent = 0;
	p2Display.classList.remove("winner");
	gameOver = false;
});

numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = numInput.value;
	winningScore = Number(numInput.value);
});