console.log("Using Old Method i.e Prototype");

//defining a constructor for Book
function Book(name, author, nature) {
	this.name = name;
	this.author = author;
	this.nature = nature;
}

//defining a constructor for Display
function Display() {}

// methods for Book

// methods for Display Class or constructor
Display.prototype.add = (book) => {
	console.log("Book Added");
	let tableBody = document.getElementById("tableBody");
	let uiString = `<tr>
						<td>${book.name}</td>
						<td>${book.author}</td>
						<td>${book.nature}</td>
					</tr>`;
	tableBody.innerHTML += uiString;
};
Display.prototype.clear = () => {
	let libraryForm = document.getElementById("libraryForm");
	libraryForm.reset();
};
Display.prototype.validate = (book) => {
	if (book.name.length < 3 || book.author.length < 3) {
		return false;
	} else {
		return true;
	}
};
Display.prototype.show = (type, displaymsg) => {
	let message = document.getElementById("msg");
	message.innerHTML = `<div
                                class="alert alert-${type} alert-dismissible fade show"
                                role="alert"
                            >
                                <strong> Message: </strong>  ${displaymsg}
                                <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="alert"
                                    aria-label="Close"
                                ></button>
				        </div>`;
	setTimeout(() => {
		message.innerHTML = "";
	}, 2000);
};

// add EventListener submit to libraryForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormsubmit);
// console.log("chk");
//libraryFormsubmit function
function libraryFormsubmit(e) {
	// console.log("Default Prevention");

	// getting name and author
	let name = document.getElementById("bookName").value;
	let author = document.getElementById("bookAuthor").value;
	let nature;

	// declaring nature type
	let webDevelopment = document.getElementById("webDevelopment");
	let androidDevelopment = document.getElementById("androidDevelopment");
	let iotProject = document.getElementById("iotProject");

	//assigning nature
	if (webDevelopment.checked) {
		nature = webDevelopment.value;
	} else if (androidDevelopment.checked) {
		nature = androidDevelopment.value;
	} else if (iotProject.checked) {
		nature = iotProject.value;
	}

	// creating object of Book
	let book = new Book(name, author, nature);
	console.log(book);

	let display = new Display();
	if (display.validate(book)) {
		display.add(book);
		display.show("success", "Your book has been successfully Added!");
		display.clear();
	} else {
		// console.log("error");
		display.show("danger", "Sorry You Can't Add this Book!!");
	}

	e.preventDefault();
}
