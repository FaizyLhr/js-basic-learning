console.log("JS");
let addBtn = document.getElementById("addBtn");
// let item = document.getElementById("Item");
// let price = document.getElementById("price");
// let qnty = document.getElementById("qnty");
let total = document.getElementById("total");
let tCal = document.getElementById("tCal");
let tbody = document.getElementsByTagName("tbody")[0];
console.log(tbody);

function addData() {
	// console.log(item, price, qnty, total, addBtn, tCal);

	//Calculate the Total Price
	calTotal();

	// Insert new row
	insertElem();
}

function insertElem() {
	let newItem = document.createElement("TR");
	newItem.innerHTML = `<td>BS-${Item.value}</td>
						<td class="text-center">$${price.value}</td>
						<td class="text-center">${qnty.value}</td>
						<td >$${total.value}</td>
						<td class="text-center">
							<button onclick="delRow()" class="btn btn-danger btn-sm">Delete</button>
							<button  class="btn btn-success btn-sm">Update</button>
						</td>`;

	tbody.insertBefore(newItem, tCal);
}

function delRow() {
	console.log("del Called");

	// event.target will be the input element.
	var td = event.target.parentNode;
	var tr = td.parentNode; // the row to be removed
	tr.parentNode.removeChild(tr);
}

function calTotal() {
	console.log("fun", price.value, qnty.value);
	let totalPrice = parseInt(price.value) * parseInt(qnty.value);
	console.log(totalPrice);
	total.value = totalPrice;
}
