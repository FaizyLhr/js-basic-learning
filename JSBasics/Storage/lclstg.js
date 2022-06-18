console.log("Local Storage Practice");

//Case Sensitive
//Set data in Local Storage
localStorage.setItem("Name", "Faizy");
localStorage.setItem("Age", "23");

// clear localStorage Data
// localStorage.clear();

localStorage.setItem("Sex", "Male");

// get Value from localStorage

console.log(localStorage.getItem("Age"));

// get length of items in localStorage
console.log(localStorage.length);

// remove Specific Value from localStorage
localStorage.removeItem("Age");
