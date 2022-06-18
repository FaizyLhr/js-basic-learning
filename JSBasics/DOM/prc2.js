console.log("Creating, Removing & Replacing Elements");

// create Element
let fe = document.getElementById("u");
// console.log(fe);

let ne = document.createElement("li");
// Assigning Text to Element
let txt = document.createTextNode("New Node");
ne.append(txt);
ne.id = "ni";
ne.className = "list";
ne.innerText = "New Node Text Changed";
ne.innerHTML = "<b>Text Changed</b>";

fe.append(ne);
// console.log(ne);

let ne2 = document.createElement("li");
txt = document.createTextNode("Added");
ne2.append(txt);
ne2.setAttribute("id", "finde");
ne2.className = "list";
ne2.innerHTML = "Add";
ne2.innerHTML = "<b>Add</b>";
// console.log(ne2);
fe.appendChild(ne2);

// Replace Element
let rchld = fe.children[0].nextElementSibling.nextElementSibling;
rchld.replaceWith(ne2);
// console.log(rchld);

// replace child Element
let rchld2 = fe.children[0].nextElementSibling;
// console.log(rchld2);
fe.replaceChild(ne2, rchld2);

//Attribute Properties

fe.setAttribute("title", "Node");
console.log(fe.getAttribute("id"));
console.log(fe.getAttribute("class"));
fe.removeAttribute("title");
let pr = fe.hasAttribute("clas");
pr = fe.hasAttribute("class");

console.log(pr);
console.log(fe);
