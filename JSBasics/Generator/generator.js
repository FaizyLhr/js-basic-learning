console.log("Generator.js");

const arr = ["ali", "hamza", "tanu", "faizy", "ahmed", "sajal", "hashir"];

function* pracGene() {
	let index = 0;
	// console.log("printed");
	// for (index of arr) {
	// 	// yield arr[index];
	// 	yield index;
	// }
	while (true) {
		yield index++;
	}
}
// arr.forEach((index) => {
// 	console.log(index);
// 	// yield index;
// });

const genVar = pracGene();
// document.body.innerHTML = genVar;
// document.body.innerHTML = genVar.next();
console.log(genVar.next().value);
console.log(genVar.next().value);
console.log(genVar.next().value);
console.log(genVar.next().value);
console.log(genVar.next().value);
console.log(genVar.next().value);
console.log(genVar.next().value);
console.log(genVar.next().value);
// console.log(genVar);
