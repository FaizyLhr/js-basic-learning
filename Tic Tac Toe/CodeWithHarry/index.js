console.log("Index.js");

// Selecting elements

// first method is to get collection of elements
const selectBox = document.getElementsByClassName("selectBox");
let selectXBtn = selectBox[0].querySelector(".playerX");
let selectOBtn = selectBox[0].getElementsByClassName("playerO");
let playBoard = document.getElementsByClassName("playBoard");
// let resultBox = document.getElementsByClassName("resultBox");
// let wonText = document.getElementsByClassName("wonText");
// let playersc = document.getElementsByClassName("players");
// console.log(playersc[0]);
// let allboxt = document.getElementsByTagName("span");
// console.log(allboxt);
// console.log(selectBox[0]);
// console.log(selectOBtn);

// second way to get a single element from DOM
// const selectBox = document.querySelector(".selectBox"),
// 	selectXBtn = selectBox.querySelector(".playerX"),
// 	selectOBtn = selectBox.querySelector(".playerO"),
// 	playBoard = document.querySelector(".playBoard");
// let allbox = document.querySelectorAll("section span");// Select All spans in Section Tag
let allbox = document.querySelectorAll(".playArea span");
// let allbox = document.querySelectorAll(".boxsection span");
let players = document.querySelector(".players");
let resultBox = document.querySelector(".resultBox");
let wonText = document.querySelector(".wonText");
let replayBtn = document.querySelector(".btn button");
// console.log(replayBtn);
// console.log(players);
// console.log(allbox);

// On Window Load
window.onload = () => {
	for (let i = 0; i < allbox.length; i++) {
		allbox[i].setAttribute("onclick", "clickBox(this)");
		// console.log(allbox[i]);
	}

	// Using First Way
	selectXBtn.onclick = () => {
		selectBox[0].classList.add("hide"); //hide selectBox on PlayerX button Click
		playBoard[0].classList.add("show"); //show playBoard section on PlayerX button Click
	};
	// Using Second Way
	selectOBtn[0].onclick = () => {
		selectBox[0].classList.add("hide"); //hide selectBox on PlayerO button Click
		playBoard[0].classList.add("show"); //show playBoard section on PlayerO button Click
		players.setAttribute("class", "players active player");
	};
};

let playerXIcon = "fas fa-times";
let playerOIcon = "far fa-circle";
let playerSign = "x";
let runBot = true;

// User Click function
function clickBox(element) {
	// console.log(element);
	// console.log(playerSign);
	// console.log(players);
	playerSign = "x";
	if (players.classList.contains("player")) {
		element.innerHTML = `<i class="${playerOIcon}"></i>`;
		element.style.color = "blue";
		players.classList.add("active");
		playerSign = "o";
		element.setAttribute("id", playerSign);
	} else {
		element.innerHTML = `<i class="${playerXIcon}"></i>`;
		element.style.color = "red";
		players.classList.add("active");
		element.setAttribute("id", playerSign);
	}
	playBoard[0].style.pointerEvents = "none";
	element.style.pointerEvents = "none";
	selectWinner();
	// element.style.cursor = "not-allowed !important";
	// console.log(players);
	// console.log(playBoard);
	let randomDelayTime = (Math.random() * 1000 + 200).toFixed();
	setTimeout(() => {
		bot(runBot);
	}, randomDelayTime);
}

// bot Click function	
function bot(runBot) {
	if (runBot) {
		// if (playerSign == "x") {
		// 	playerSign = "o";
		// }
		playerSign = "o";
		let unselectedarray = [];
		// console.log(allbox);
		for (let i = 0; i < allbox.length; i++) {
			if (allbox[i].childElementCount == 0) {
				unselectedarray.push(i);
				// console.log(`${i+1} item has no childs`);
			}
		}
		let randomBox =
			unselectedarray[Math.floor(Math.random() * unselectedarray.length)];

		if (unselectedarray.length > 0) {
			if (players.classList.contains("player")) {
				players.classList.remove("active");
				allbox[randomBox].style.color = "red";
				playerSign = "x";
				allbox[randomBox].setAttribute("id", playerSign);
				let randomDelayTime = (Math.random() * 1000 + 200).toFixed();
				setTimeout(() => {
					allbox[randomBox].innerHTML = `<i class="${playerXIcon}"></i>`;
					players.classList.add("active");
				}, randomDelayTime);
			} else {
				allbox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>`;
				allbox[randomBox].style.color = "blue";
				players.classList.remove("active");
				allbox[randomBox].setAttribute("id", playerSign);
			}
			selectWinner();
		}
		playBoard[0].style.pointerEvents = "auto";
		allbox[randomBox].style.pointerEvents = "none";
		// console.log(randomBox);
		// console.log(unselectedarray);
	}
}

function getID(idname) {
	return document.querySelector(`.box${idname}`).id;
}
function checkThreeID(val1, val2, val3, sign) {
	// console.log(getID(val1), getID(val2), getID(val3), sign);
	if (getID(val1) == sign && getID(val2) == sign && getID(val3) == sign) {
		// console.log("true");
		return true;
	}
}
function selectWinner() {
	if (
		checkThreeID(1, 2, 3, playerSign) ||
		checkThreeID(4, 5, 6, playerSign) ||
		checkThreeID(7, 8, 9, playerSign) ||
		checkThreeID(1, 4, 7, playerSign) ||
		checkThreeID(2, 5, 8, playerSign) ||
		checkThreeID(3, 6, 9, playerSign) ||
		checkThreeID(7, 5, 3, playerSign) ||
		checkThreeID(1, 5, 9, playerSign)
	) {
		// console.log(`${playerSign.toUpperCase()} is Winner!!!`);
		runBot = false;
		bot(runBot);
		setTimeout(() => {
			// console.log(playBoard[0]);
			// console.log(resultBox);
			playBoard[0].classList.remove("show");
			resultBox.classList.add("show");
		}, 700);
		wonText.innerHTML = `Player
						<p>${playerSign}</p>
						won the Game!`;
	} else {
		if (
			getID(1) != "" &&
			getID(2) != "" &&
			getID(3) != "" &&
			getID(4) != "" &&
			getID(5) != "" &&
			getID(6) != "" &&
			getID(7) != "" &&
			getID(8) != "" &&
			getID(9) != ""
		) {
			runBot = false;
			bot(runBot);
			setTimeout(() => {
				// console.log(playBoard);
				// console.log(resultBox);
				playBoard[0].classList.remove("show");
				resultBox.classList.add("show");
			}, 700);
			wonText.textContent = `Match has been Drawn!!`;
		}
	}
}

replayBtn.onclick = () => {
	window.location.reload();
};
