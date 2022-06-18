console.log("Magic Notes App");
// localStorage.clear();
showNotes();

// function to del specific note
function delNote(index) {
	// console.log("Deleting ", index);

	let notes = localStorage.getItem("notes");
	// convert all Elements to Array from LocalStorage
	//create array for first time
	if (notes == null) {
		// console.log("c2");
		var notesObj = [];
	} else {
		//converting string to array
		notesObj = JSON.parse(localStorage.getItem("notes"));
		// console.log(notesObj);
	}

	// removing one element from Array
	notesObj.splice(index, 1);
	// console.log(notesObj);
	// update the local Storage
	localStorage.setItem("notes", JSON.stringify(notesObj));
	// refresh the notes display
	showNotes();
}

// function to display all the notes
function showNotes(e) {
	// console.log("fun Called");

	let notes = localStorage.getItem("notes");
	// console.log("c1");
	// convert all Elements to Array from LocalStorage
	//create array for first time
	if (notes == null) {
		// console.log("c2");
		var notesObj = [];
	} else {
		//converting string to array
		notesObj = JSON.parse(localStorage.getItem("notes"));
		// console.log(notesObj);
	}
	// console.log("c3");
	html = "";
	notesObj.forEach((element, index) => {
		// console.log("c4");
		// merging all cards
		html += `<div class="card cardNote ms-3 my-3" style="width: 18rem">
						<div class="card-body">
							<h5 class="card-title">Note ${index + 1}</h5>
							<p class="card-text">${element}</p>
							<button id="${index}" onclick="delNote(this.id)" class="btn btn-danger">Delete Note</button>
						</div>
					</div>`;
		// console.log(html);
	});
	// Append HTML of Card to div
	let edata = document.getElementById("notes");
	if (notesObj.length != 0) {
		edata.innerHTML = html;
	} else {
		console.log("chk");

		edata.innerHTML = `<h4 class="text-center text-warning border bg-dark p-5">No data to display!!! <br> User "Add a note Section" to Add a Note!!!</h4>`;
	}
}

let addBtn = document.getElementById("addbtn");
addBtn.addEventListener("click", (e) => {
	let addTxt = document.getElementById("addtxt");

	// Getting all values from Local Storage
	let notes = localStorage.getItem("notes");

	// convert all Elements to Array from LocalStorage
	//create array for first time
	if (notes == null) {
		var notesObj = [];
	} else {
		//converting string to array
		notesObj = JSON.parse(localStorage.getItem("notes"));
	}

	// Add / Push Value or data to Array
	notesObj.push(addTxt.value);
	//store the array to local Storage
	localStorage.setItem("notes", JSON.stringify(notesObj));
	addTxt.value = "";

	showNotes();
});

// perform Search Operation
let search = document.getElementById("searchTxt");
search.addEventListener("input", () => {
	inputVal = search.value;
	let nCards = document.getElementsByClassName("cardNote");
	Array.from(nCards).forEach((element) => {
		let cText = element.getElementsByTagName("p")[0].innerText;
		if (cText.includes(inputVal)) {
			element.style.display = "block";
		} else {
			element.style.display = "none";
		}
	});
});
