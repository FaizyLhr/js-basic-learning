console.log("Iterator using JS");

const arr = ["ali", "hamza", "tanu", "faizy", "ahmed", "sajal", "hashir"];
console.log(arr);

function arrIterator(arr) {
	let index = 0;

	return {
		// current: () => {
		// 	return arr[index];
		// },
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

let personArr = arrIterator(arr);
// console.log(personArr.current());
console.log(personArr.next().value);
console.log(personArr.next().value);
console.log(personArr.next().value);
console.log(personArr.next().value);
