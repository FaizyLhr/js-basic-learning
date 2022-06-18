console.log("Index.js");

async function faizy() {
	console.log("Inside faizy Function");
	let response = await fetch("https://api.github.com/users");
	console.log("before get resolve");
	let users = await response.json();
	console.log("After get resolve");
	return users;
	// return "faizy";
}
function faizynormal() {
	console.log("Inside faizy Function");
	return "faizy";
}

console.log("Before Calling faizy");
// let y = faizynormal();
let x = faizy();
console.log("After Calling faizy");
// console.log(y);
console.log(x);
x.then((data) => console.log(data));
console.log("Last Line of File");
