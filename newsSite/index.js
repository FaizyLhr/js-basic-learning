console.log("Index . js file here");

// Initialize news Variables
let source = "in";
let apiKey = "2d02f059c4314278a1ff3e3b59e03bcd";

// news Container
let newsAccordion = document.getElementById("newsAccordion");

// AJAX get Request
const xhr = new XMLHttpRequest();

xhr.open(
	"GET",
	`https://newsapi.org/v2/top-headlines?country=${source}&apiKey=${apiKey}`,
	true
);

// xhr.open(
// 	`GET`,
// 	`https://newsapi.org/v2/top-headlines?country=in&apiKey=2d02f059c4314278a1ff3e3b59e03bcd`,
// 	true
// );

xhr.onload = function () {
	if (this.status === 200) {
		let json = JSON.parse(this.responseText);
		let articles = json.articles;
		let newsHTML = "";
		// for (let news in articles) {
		articles.forEach((element, index) => {
			// console.log(articles[news]);
			let news = `
						<div class="card">
							<div class="card-header" id="heading${index}">
								<h2 class="mb-0">
									<button
										class="btn btn-link collapsed"
										type="button"
										data-toggle="collapse"
										data-target="#collapse${index}"
										aria-expanded="true"
										aria-controls="collapse${index}"
									>
										
										<b>Breaking news ${index + 1} : </b> ${element["title"]}
									</button>
								</h2>
							</div>

							<div
								id="collapse${index}"
								class="collapse "
								aria-labelledby="heading${index}"
								data-parent="#newsAccordion"
							>
								<div class="card-body">
									${element["content"]}. 
									<a href="${element["url"]}" target="_blank">Read more here</a>
								</div>
							</div>
						</div>`;

			newsHTML += news;
			// ${articles["title"]}
			// ${articles["description"]}
			// const element = articles[news];
		});
		// }
		newsAccordion.innerHTML = newsHTML;
		console.log(articles);
	} else {
		console.log("Some Error Occured");
	}
};

xhr.send();
