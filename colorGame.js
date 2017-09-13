var squareNum = 6;
var colors = [];
var selectedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	setupModeButtons();
	setupSquares();
	reset();
}

resetButton.addEventListener("click", function() {
	reset();
});

function setupModeButtons() { // 0:easy 1: hard
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if (this.textContent == "Easy") {
				squareNum = 3;
			} else {
				squareNum = 6;
			}

			reset();
		});
	}
}

function setupSquares() {

	for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.backgroundColor;

		if (clickedColor === selectedColor) {
			changeColor(clickedColor);
			messageDisplay.textContent = "Correct!";
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again!";
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}
}

function reset() {
	colors = generateColors(squareNum);
	selectedColor = colorPick();
	colorDisplay.textContent = selectedColor;
	resetButton.textContent = "New Colors";

	for (var i = 0; i < squares.length; i++) {
		if (i < squareNum) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}

	h1.style.backgroundColor = "steelblue";
}

function colorPick() {
	var r = Math.floor(Math.random() * colors.length);
	var color = colors[r];
	console.log(r);
	return color;
}

function generateColors(num) {
	var arr = []
	for (var i = 0; i < num; i++) {
		arr.push(getRandomColor());
	}

	return arr;
}

function getRandomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function changeColor(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}