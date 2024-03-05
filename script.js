// 1
const button = document.querySelector(".js-button");
const btnClassJs = button.classList.contains("js-button");

console.log('Кнопкада "js-button" деген класс бар :', btnClassJs);

// 2
document.querySelector("#toggleButton").addEventListener("click", function () {
	const button = document.querySelector("#toggleButton");
	if (button.innerHTML === "ON") {
		button.innerHTML = "OFF";
		button.classList.add("off");
	} else {
		button.innerHTML = "ON";
		button.classList.remove("off");
	}
});

// 3
const resultText = document.querySelector("#result");
const inputValue = document.querySelector("#inputText");
const submit = document.querySelector("#submit");

const showInputValue = () => {
	const value = inputValue.value.trim();
	resultText.innerHTML = value;
	resultTask.value = "";
};
submit.addEventListener("click", showInputValue);

// 3.2
const input = document.querySelector("#input");
const button2 = document.querySelector("#button");
const list = document.querySelector("#list");

button2.addEventListener("click", () => {
	list.innerHTML = input.value;
	input.value = "";
});

// 4
const inputEnter = document.querySelector("#inputEnter");
const listEnter = document.querySelector("#listEnter");

listEnter.addEventListener("keyup", function (e) {
	if (e.code === "Enter") {
		listEnter.innerHTML = inputEnter.value;
		inputEnter.value = "";
	}
});

// 5
const secondInputValue = document.querySelector("#inputTask5");
const secondResultText = document.querySelector("#resultTask5");

secondInputValue.addEventListener("input", () => {
	secondResultText.innerText = event.target.value;
});

// 6
const resultTaskSixth = document.querySelector("#resultTask6");
const one = document.querySelector("#oneNum");
const two = document.querySelector("#twoNum");
const three = document.querySelector("#threeNum");
const plus = document.querySelector("#plus");

const showNumbers = (number) => {
	localStorage.setItem("numbers", resultTaskSixth.textContent);
	resultTaskSixth.innerText += number;
};
resultTaskSixth.innerText = localStorage.getItem("numbers");

// 7 img
