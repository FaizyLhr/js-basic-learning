let divClick = document.getElementById("d");
let bodyClick = document;

// Add Events on Buttons
divClick.addEventListener("click", fun1);
bodyClick.addEventListener("click", fun2);

function fun1() {
	let fpara = document.getElementById("s1").innerText;
	let decvar = document.getElementById("s2").innerText;
	fpara++;
	decvar--;
	document.getElementById("s1").innerText = fpara;
	document.getElementById("s2").innerText = decvar;
}

function fun2() {
	let decvar = document.getElementById("s1").innerText;
	let fpara = document.getElementById("s2").innerText;
	fpara++;
	decvar--;
	document.getElementById("s2").innerText = fpara;
}
