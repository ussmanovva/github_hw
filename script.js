const totalResult = JSON.parse(localStorage.getItem("total")) || {
	lose: 0,
	win: 0,
	draw: 0,
};

showResultFromLocalS();

const resultP = document.querySelector(".result");

function playGame(params) {
	const computerMove = computerSelect();
	let result = "";

	const { lose, win, draw } = totalResult;

	if (params === "Кайчы") {
		if (computerMove === "Кайчы") {
			result = "Тен";
		} else if (computerMove === "Кагаз") {
			result = "Утуш";
		} else if (computerMove === "Кудук") {
			result = "Женилуу";
		}
	}
	if (params === "Кудук") {
		if (computerMove === "Кудук") {
			result = "Тен";
		} else if (computerMove === "Кагаз") {
			result = "Женилуу";
		} else if (computerMove === "Кайчы") {
			result = "Утуш";
		}
	}
	if (params === "Кагаз") {
		if (computerMove === "Кагаз") {
			result = "Тен";
		} else if (computerMove === "Кайчы") {
			result = "Женилуу";
		} else if (computerMove === "Кудук") {
			result = "Утуш";
		}
	}

	if (result === "Утуш") {
		totalResult.win = totalResult.win + 1;
	} else if (result === "Женилуу") {
		totalResult.lose = totalResult.lose + 1;
	} else {
		totalResult.draw = totalResult.draw + 1;
	}

	console.log(`Компьютер ${computerMove} ,а сиз ${params}:Жыйынтык ${result}`);

	resultP.innerHTML = `result: <span style='color: red'> ${result}</span>`;

	document.querySelector(
		".moves"
	).innerHTML = `Сиз:${params} === Компьютер:${computerMove}`;

	localStorage.setItem("total", JSON.stringify(totalResult));

	showResultFromLocalS();

	document.querySelector(
		".js-13_total"
	).innerHTML = `Результат: w: ${totalResult.win}, l: ${totalResult.lose} , d: ${totalResult.draw}`;

	console.log(
		`Утуш ${totalResult.win} , Тен ${totalResult.draw} , Женилуу ${totalResult.lose}`
	);
}

function computerSelect() {
	const randomNumber = Math.random();

	let result = "";

	if (randomNumber >= 0 && randomNumber < 1 / 3) {
		result = "Кудук";
	} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
		result = "Кайчы";
	} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
		result = "Кагаз";
	}
	return result;
}

function showResultFromLocalS() {
	document.querySelector(
		".js-13_total"
	).innerHTML = `Результат: w: ${totalResult.win}, l: ${totalResult.lose} , d: ${totalResult.draw}`;

	console.log(
		`Утуш ${totalResult.win} , Тен ${totalResult.draw} , Женилуу ${totalResult.lose}`
	);
}

localStorage.setItem("magic", "1650111");
localStorage.setItem("number", 996998083828);
console.log(localStorage.getItem("number"));
const magic = localStorage.getItem("magic");
console.log(magic);
document.body.innerHTML;

const userTime = localStorage.setItem("time", new Date());

const students = {
	name: "Alisher",
	age: 19,
	phone: 996,
};

localStorage.clear();

const perevestiVString = JSON.stringify(students);
console.log(perevestiVString);
const obratno = JSON.parse(perevestiVString);
console.log(obratno);

localStorage.setItem("student", perevestiVString);
const studenAdilet = JSON.parse(localStorage.getItem("student"));
console.log(studenAdilet);
console.log(localStorage.getItem("student"));

// 1.1 -------------------------------------------------
const myObj = {
	name: "Basketball Ball",
	price: 2095,
};

// 1.2
console.log(myObj);

// 1.3
const plusObj = myObj.price + 500;
myObj.price = plusObj;

// 1.4
console.log(myObj);

// 2.1 -------------------------------------------------
myObj.delivery_time = "3 кун";

// 2.2
console.log(myObj);

// 3 -------------------------------------------------
function comparePrice(product1, product2) {
	return Math.min(product1, product2);
}
console.log(comparePrice(584, 8744));

// object
const product1 = {
	name: "Basketball Ball",
	price: 2095,
};

const product2 = {
	name: "sock",
	price: 1090,
};

const products = product1.price > product2.price ? product1 : product2;
console.log(products);

// 4 -------------------------------------------------
const compareName = (productName1, productName2) => {
	result = productName1 === productName2 ? true : false;
	return result;
};
console.log(compareName("Aizat", "Alisher"));

// object's
const productSome1 = {
	name: "basketball",
	price: 2095,
};

const productSome2 = {
	name: "socks",
	price: 1090,
};

const productSome3 = {
	name: "basketball",
	price: 2095,
};

const isSameProduct = (sameProduct1, sameProduct2) => {
	return (
		sameProduct1.name === sameProduct2.name &&
		sameProduct1.price === sameProduct2.price
	);
};
console.log(isSameProduct(productSome1, productSome2), "is same");

// 5 -------------------------------------------------
console.log("Good Morning".toLowerCase());
console.log("TESTING".toLowerCase());

// 6 -------------------------------------------------
console.log("hello".repeat(2));
console.log("test".repeat(3));
console.log("test".repeat(3));

// 7 -------------------------------------------------
const domTask = document.querySelector(".buttonDom");
console.log(domTask);

// 8 -------------------------------------------------
const domTask2 = document.querySelector(".js-button");
document.querySelector(".js-button").innerHTML = "Нажмите";
console.log(domTask2);

// 9 -------------------------------------------------
const resultJs = document.querySelector(".resultHtml"); 

showOrel = () => {
	resultJs.innerHTML = `Сиздин тандоонуз: Орел`;
};

showReshka = () => {
	resultJs.innerHTML = `Сиздин тандоонуз: Решка`;
};

// 10 img file ------------------------------------------

// 11.1 -------------------------------------------------
localStorage.setItem("number", +996778183837);
// 11.2
console.log(localStorage.getItem("number"));

// 11.2.1
localStorage.setItem("name", "Aizat");
// 11.2.2
console.log(localStorage.getItem("name"));

// 11.1 - 2 -3
const prodduct = {
	name: "basketball",
	price: 2095,
};

localStorage.setItem("product", JSON.stringify(prodduct));
const savedProduct = JSON.parse(localStorage.getItem("product"));
console.log(savedProduct);

// 12
const person = {
	name: "Nursultan",
	surname: "Kenzhebaev",
	id: 899,
};

localStorage.setItem("user", JSON.stringify(person));
const savUser = JSON.parse(localStorage.getItem("user"));
document.write(JSON.stringify(person));
