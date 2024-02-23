// ! 1
// a declaration
function showMessageDec() {
	alert("Hello, declaration");
}
showMessageDec();

// b expression
const showMessageExp = function () {
	alert("Hello, expression");
};
showMessageExp();

// c arrow
const showMessageArw = () => {
	alert("Hello, arrow!");
};
showMessageArw();

// ! 2
// a declaration
function calcNumbersDec(x, y) {
	return x + y;
}
console.log(calcNumbersDec(7, 5));

// b expression
const calcNumbersExp = function (x, y) {
	return x + y;
};
console.log(calcNumbersExp(11, 5));

// c arrow
const calcNumbersArw = (x, y) => {
	return x + y;
};
console.log(calcNumbersArw(4, 55));

// ! 3
// a declaration
function getSquareDec(squareNumbers) {
	return squareNumbers * squareNumbers;
}
console.log(getSquareDec(5));

// b expression
const getSquareExp = function (squareNumbers) {
	return squareNumbers * squareNumbers;
};
console.log(getSquareExp(5));

// c arrow
const getSquareArw = (squareNumbers) => {
	return squareNumbers * squareNumbers;
};
console.log(getSquareArw(5));

// ! 4
// a declaration
function showGreetingDec(userName) {
	alert(userName);
}
showGreetingDec("Hello, Alisher (Declaration)");

// b expression
const showGreetingExp = function (userName) {
	alert(userName);
};
showGreetingExp("Hello, Alisher (Expression)");

// c arrow
const showGreetingArw = (userName) => {
	alert(userName);
};
showGreetingArw("Hello, Alisher (Arrow)");

// ! 5
// a declaration
function getMergeStrDec(stringName, stringSurname) {
	return stringName + stringSurname;
}
console.log(getMergeStrDec("Nursultan", "Kenzhebaev (Declaration"));

// b expression
const getMergeStrExp = function (stringName, stringSurname) {
	return stringName + stringSurname;
};
console.log(getMergeStrExp("Nursultan", "Kenzhebaev (Expression)"));

// c arrow
const getMergeStrArw = (stringName, stringSurname) => {
	return stringName + stringSurname;
};
console.log(getMergeStrArw("Nursultan", "Kenzhebaev (Arrow)"));

// ! 6
// a decleration
function checkEvenNumDec(number) {
	let result =
		number % 2 === 0
			? `Число ${number} - чётное`
			: `Число ${number} - нечётное`;
	return result;
}
console.log(checkEvenNumDec(101));

// b expression
const checkEvenNumExp = function (number) {
	let result =
		number % 2 === 0
			? `Число ${number} - чётное`
			: `Число ${number} - нечётное`;
	return result;
};
console.log(checkEvenNumExp(80));

// c arrow
const checkEvenNumArw = (number) => {
	let result =
		number % 2 === 0
			? `Число ${number} - чётное`
			: `Число ${number} - нечётное`;
	return result;
};
console.log(checkEvenNumArw(11));

// ! 7
// a decleration
function showBiggestNumDec(firstNum, secondNum) {
	if (firstNum === secondNum) {
		return `${firstNum} и ${secondNum} равны`;
	}
	let result =
		firstNum >= secondNum
			? `Число ${firstNum} больше ${secondNum}`
			: `Число ${secondNum} больше ${firstNum}`;
	return result;
}
console.log(showBiggestNumDec(300, 300));

// b expression
const showBiggestNumExp = function (firstNum, secondNum) {
	if (firstNum === secondNum) {
		return `${firstNum} и ${secondNum} равны`;
	}
	let result =
		firstNum >= secondNum
			? `Число ${firstNum} больше ${secondNum}`
			: `Число ${secondNum} больше ${firstNum}`;
	return result;
};
console.log(showBiggestNumExp(111, 277));

// c arrow
const showBiggestNumArw = (firstNum, secondNum) => {
	if (firstNum === secondNum) {
		return `${firstNum} и ${secondNum} равны`;
	}
	let result =
		firstNum >= secondNum
			? `Число ${firstNum} больше ${secondNum}`
			: `Число ${secondNum} больше ${firstNum}`;
	return result;
};
console.log(showBiggestNumArw(303, 784));

// ! 8
// a declaration
function getLengthStringDec(nameString) {
	return nameString.length;
}
console.log(getLengthStringDec("Alisher"));

// b expression
const getLengthStringExp = function (nameString) {
	return nameString.length;
};
console.log(getLengthStringExp("Nursultan"));

// c arrow
const getLengthStringArw = (nameString) => {
	return nameString.length;
};
console.log(getLengthStringArw("Aizat"));

// ! 9
// a declaration
function getUserInfoDec(userInfoName, userInfoAge) {
	let result = `Привет, ${userInfoName}! Тебе ${userInfoAge} лет.`;
	return result;
}
console.log(getUserInfoDec("Алишер", 16));

// b expression
const getUserInfoExp = function (userInfoName, userInfoAge) {
	let result = `Привет, ${userInfoName}! Тебе ${userInfoAge} лет.`;
	return result;
};
console.log(getUserInfoExp("Айзат", 20));

// c arrow
const getUserInfoArw = (userInfoName, userInfoAge) => {
	let result = `Привет, ${userInfoName}! Тебе ${userInfoAge} лет.`;
	return result;
};
console.log(getUserInfoArw("Нурсултан", 27));

// ! 10
// a declaration
function checkNumbersDec(number1, number2) {
	let result =
		number1 > 10 && number2 > 10 ? number1 + number2 : number1 - number2;
	return result;
}
console.log(checkNumbersDec(1, 5));

// b expression
const checkNumbersExp = function (number1, number2) {
	let result =
		number1 > 10 && number2 > 10 ? number1 + number2 : number1 - number2;
	return result;
};
console.log(checkNumbersExp(4, -7));

// c arrow
const checkNumbersArw = (number1, number2) => {
	let result =
		number1 > 10 && number2 > 10 ? number1 + number2 : number1 - number2;
	return result;
};
console.log(checkNumbersArw(50, 407));

// ! 11
// a declaration
function checkBatirDec(batir) {
	let result = 0;
	if (1 <= batir && batir <= 20) {
		result = `Вы находитесь в 1 подъезде`;
	} else if (21 <= batir && batir <= 48) {
		result = `Вы находитесь в 2 подъезде`;
	} else if (49 <= batir && batir <= 90) {
		result = `Вы находитесь в 3 подъезде`;
	} else {
		result = `Вы ошиблись:)`;
	}
	return result;
}
console.log(checkBatirDec(33));

// b expression
const checkBatirExp = function (batir) {
	let result = 0;
	if (1 <= batir && batir <= 20) {
		result = `Вы находитесь в 1 подъезде`;
	} else if (21 <= batir && batir <= 48) {
		result = `Вы находитесь в 2 подъезде`;
	} else if (49 <= batir && batir <= 90) {
		result = `Вы находитесь в 3 подъезде`;
	} else {
		result = `Вы ошиблись:)`;
	}
	return result;
};
console.log(checkBatirExp(14));

// c arrow
const checkBatirArw = (batir) => {
	let result = 0;
	if (1 <= batir && batir <= 20) {
		result = `Вы находитесь в 1 подъезде`;
	} else if (21 <= batir && batir <= 48) {
		result = `Вы находитесь в 2 подъезде`;
	} else if (49 <= batir && batir <= 90) {
		result = `Вы находитесь в 3 подъезде`;
	} else {
		result = `Вы ошиблись:)`;
	}
	return result;
};
console.log(checkBatirArw(64));
