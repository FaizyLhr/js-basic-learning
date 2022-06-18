console.log("Iterator.js");

const btn = document.getElementById("btn");
const disdiv = document.getElementById("disdiv");

const arr = ["ali", "hamza", "tanu", "faizy", "ahmed", "sajal", "hashir"];

let personArr = arrIterator(arr);

// console.log(personArr.next());
// console.log(personArr.next());
// console.log(personArr.next());
// console.log(personArr.next());
// console.log(personArr.next());
// console.log(personArr.next());
// console.log(personArr.next());
// console.log(personArr.next());
function arrIterator(arr) {
	// console.log(personArr.next());
	// let currentIndex = personArr.next().value;
	let index = 0;

	return {
		next: () => {
			return index < arr.length
				? {
						value: arr[index++],
						done: false,
				  }
				: {
						done: true,
				  };
		},
	};
}

btn.addEventListener("click", addValue);
function addValue() {
	let msg = "";
	msg = `<li class="list-group-item">${personArr.next().value}</li>`;
	disdiv.innerHTML += msg;
	// console.log(msg);
}
