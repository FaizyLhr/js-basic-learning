console.log("Ajax Practice");

let btnget = document.getElementById("btnget");
let btnpost = document.getElementById("btnpost");

btnget.addEventListener("click", getcall);
btnpost.addEventListener("click", postcall);

function getcall() {
	console.log("Get Button Clicked");
	// make Object of XMLHttpRequest
	const xhr = new XMLHttpRequest();

	//Open a Object
	xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);

	// what to do on progress (optional)
	xhr.onprogress = function () {
		console.log("In Progress");
	};

	xhr.onreadystatechange = function () {
		// console.log(`State change to : ${xhr.readyState}`);
		console.log(`State change to`, xhr.readyState);
	};

	// what to do when response is ready
	xhr.onload = function () {
		if (this.status === 200) {
			console.log(this.responseText);
		} else {
			console.error("Some Error Occured");
		}
	};

	// send the Request to server
	xhr.send();

	console.log("We are Done!!");
}
function postcall() {
	console.log("Post Button Clicked");

	// make Object of XMLHttpRequest
	const xhr = new XMLHttpRequest();

	//Open a Object
	// xhr.open("POST", "data.txt", true);
	// xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
	xhr.open("POST", "https://petstore.swagger.io/#/pet/uploadFile", true);
	// xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
	// xhr.open("POST", "https://reqres.in/api/users", true);

	// xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	// xhr.getResponseHeader
	xhr.getResponseHeader("Content-type", "application/json");
	// xhr.setRequestHeader("Content-type", "application/json");

	// what to do on progress (optional)
	// xhr.onprogress = function () {
	// 	console.log("In Progress");
	// };

	// xhr.onreadystatechange = function () {
	// 	// console.log(`State change to : ${xhr.readyState}`);
	// 	console.log(`State change to`, xhr.readyState);
	// };

	// what to do when response is ready
	xhr.onload = function () {
		console.log(this.responseText);
		// if (this.status === 200) {
		// 	console.log(this.responseText);
		// } else {
		// 	console.log("Some Error Occured");
		// }
	};

	// send the Request to server
	// params = `{
	// "userId": "90",
	// "id": "90",
	// "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
	// "body": "\nnostrum rerum est autem sunt rem eveniet architecto"
	//   }`;

	params = `{
  "code": 0,
  "type": "string",
  "message": "string"
}`;

	// 	params = `{
	//     "name": "Faizy",
	//     "job": "Developer"
	// }`;

	// params = `{"name":"test","salary":"123","age":"23"}`;
	// xhr.send("name=Faizy&age=15");
	xhr.send(params);

	console.log("We are Done!!");
}
