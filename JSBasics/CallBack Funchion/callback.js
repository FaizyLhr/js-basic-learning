console.log("Callbak practice");

// let response is coming from Server
const students = [
	{
		name: "faizy",
		sex: "male",
		subject: "JS",
	},
	{
		name: "ali",
		sex: "male",
		subject: "Python",
	},
];

function enrollStudent(student, callback) {
	console.log("chk");
	setTimeout(() => {
		students.push(student);
		callback();
	}, 1000);
	console.log("student Enrolled");
}
function getStudents() {
	console.log("chk2");
	setTimeout(() => {
		let str = "";
		students.forEach((student) => {
			str += `<li> ${student.name} </li>`;
		});
		document.getElementById("studentid").innerHTML = str;
		console.log("Data Fetched");
	}, 1000);
}

let newStudent = {
	name: "Sunny",
	subject: "php",
};
enrollStudent(newStudent, getStudents);
// getStudents();
