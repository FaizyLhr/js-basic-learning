console.log("Index.js");

let inputData, data;
let contentDisplay = document.getElementById("contentDisplay");
// console.log(contentDisplay);
let html = "";
function myFunction() {
	inputData = document.getElementById("inputData");
	if (inputData.value.length >= 4) {
		data = inputData.value;
		// console.log(data);
		html += `<li>${data}</li>`;
		// console.log("html");
		console.log(html);
		inputData.value = "";
		contentDisplay.innerHTML = html;
		inputData.style.border = "2px solid lightgrey";
	} else {
		inputData.style.border = "2px solid red";
	}
}
