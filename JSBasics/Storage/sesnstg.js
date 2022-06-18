console.log("Session Storage Practice");

//Case Sensitive
//Set data in Local Storage
sessionStorage.setItem("Name", "Faizy");
sessionStorage.setItem("Age", "23");

// clear sessionStorage Data
// sessionStorage.clear();

sessionStorage.setItem("Sex", "Male");

// get Value from sessionStorage

console.log(sessionStorage.getItem("Age"));

// get length of items in sessionStorage
console.log(sessionStorage.length);

// remove Specific Value from sessionStorage
sessionStorage.removeItem("Age");
