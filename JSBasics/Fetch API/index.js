console.log("Index.js");

let myBtn = document.getElementById("myBtn");
let content = document.getElementById("content");

// get data using GET Request
// From URL
// function getData() {
// 	// console.log("Started getData");
// 	url = "https://api.github.com/users";
// 	fetch(url)
// 		.then((response) => {
// 			// console.log("Inside First Then");
// 			return response.json();
// 		})
// 		.then((data) => {
// 			// console.log("Inside Second Then");
// 			console.log(data);
// 		});
// }

// get data using GET Request
// From File
// function getData() {
// 	console.log("Started getData");
// 	url = "faizy.txt";
// 	fetch(url)
// 		.then((response) => {
// 			console.log("Inside First Then");
// 			return response.text();
// 		})
// 		.then((data) => {
// 			console.log("Inside Second Then");
// 			console.log(data);
// 		});
// }

// console.log("Before getData Call");
// getData();
// console.log("After getData Call");

function postData() {
	// url = "https://api.github.com/users";
	url = "https://reqres.in/api/users";
	data = {
		name: "faizy",
		job: "leader",
	};
	params = {
		method: `post`,
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	};
	fetch(url, params)
		.then((response) => response.json())
		.then((data) => console.log(data));
}
postData();
