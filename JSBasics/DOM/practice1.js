console.log("Document Start");
// Single Element Selection
// ID
// querySelector

// 1.ID
let sel = document.getElementById("u");
// Related Methods
// console.log(sel.children);
// console.log(sel.childNodes);
// console.log(sel.className);
// console.log(sel.classList);
// console.log(sel.parentNode);
// console.log(sel.parentElement);

//make array of Collection
let get = Array.from(sel.children);
// console.log(get);

// Traverse each node of arr using Function
get.forEach((element) => {
	// element.innerHTML = "ali";
	// element.style.color = "red";
});
// 2.querySelector
let qvar = document.querySelector("#d1");
// console.log(qvar);
// console.log(qvar.innerHTML);
// console.log(qvar.innerText);
// console.log(qvar.id);
// console.log(qvar.classList);
// console.log(Array.from(qvar.classList).forEach((e) => console.log(e)));
// console.log(qvar.className);

// return only First Match Element
let qcn = document.querySelector(".list");
// console.log(qcn);

// MultiLine Selection
// getElementsByTagName
// getElementsByClassName
// querySelectorAll

// 1. getElementsByTagName
let tvar = document.getElementsByTagName("li");
// console.log(tvar);

// 2. getElementsByClassName
let cvar = document.getElementsByClassName("list");
// Array.from(cvar).forEach((e) => console.log(e.className));

// 3.querySelectorAll
let qvara = document.querySelectorAll(".list");
// console.log(qvara);
// console.log(qvara.length);

// Traverse the DOM using JS
let tra = document.querySelector("#u");
// console.log(tra);
// console.log(tra.childElementCount);
// console.log(tra.nodeName);
// console.log(tra.nodeType);
// console.log(tra.innerHTML);
// console.log(tra.innerText);
// console.log(tra.childNodes);
// console.log(tra.lastElementChild.previousElementSibling);
// console.log(tra.lastChild.previousSibling);
// console.log(tra.firstChild.nextSibling.nextSibling.nextSibling);
// console.log(tra.firstElementChild);
// console.log(tra.lastChild);
// console.log(tra.lastElementChild);

let tra2 = document.querySelector(".container");
// tra2 = tra2.children;
// console.log(tra2.children[5].children);
// console.log(tra2.children[5].children[0]);
// console.log(tra2.children[5].children[0].children);
// console.log(tra2.children[5].children[0].children[4]);
// console.log(tra2.children[5].children[0].children[4].innerText);
