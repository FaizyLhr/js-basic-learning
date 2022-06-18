console.log("Index.js");

const next = document.getElementById("next");
let image = document.getElementById("image");
let profile = document.getElementById("profile");

// Array of Candidates
const data = [
	{
		name: "faizy",
		age: 23,
		city: "grw",
		language: "Python",
		framework: "Django",
		image: "https://randomuser.me/api/portraits/men/75.jpg",
	},
	{
		name: "ali",
		age: 12,
		city: "fsd",
		language: "JavaScript",
		framework: "React",
		image: "https://randomuser.me/api/portraits/men/71.jpg",
	},
	{
		name: "hamza",
		age: 20,
		city: "grw",
		language: "Go",
		framework: "GOFrame",
		image: "https://randomuser.me/api/portraits/men/79.jpg",
	},
	{
		name: "hashir",
		age: 18,
		city: "lahore",
		language: "JavaScript",
		framework: "Angular",
		image: "https://randomuser.me/api/portraits/men/55.jpg",
	},
	{
		name: "tanu",
		age: 22,
		city: "phalia",
		language: "php",
		framework: "larawell",
		image: "https://randomuser.me/api/portraits/women/75.jpg",
	},
];
console.log(data);

function cvIterator(profiles) {
	let nextIndex = 0;
	return {
		next: () => {
			// console.log("go");
			return nextIndex < profiles.length
				? {
						value: profiles[nextIndex++],
						done: false,
				  }
				: {
						done: true,
				  };
		},
	};
}

const candidates = cvIterator(data);

nextCV();

//Button Operate
next.addEventListener("click", nextCV);
function nextCV() {
	const currentCandidate = candidates.next().value;
	if (currentCandidate != undefined) {
		image.innerHTML = `<img src="${currentCandidate.image}">`;
		profile.innerHTML = `<ul class="list-group">
        <li class="list-group-item">${currentCandidate.name}</li>
        <li class="list-group-item">${currentCandidate.age}</li>
        <li class="list-group-item">${currentCandidate.city}</li>
        <li class="list-group-item">${currentCandidate.language}</li>
        <li class="list-group-item">${currentCandidate.framework}</li>
    </ul>`;
	} else {
		alert("End Of Candidate Applications");
		window.location.reload();
	}
}
