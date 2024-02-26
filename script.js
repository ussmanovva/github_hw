// 1
const car = {
	brand: "Mercedes-Benz",
	model: "280SE",
	year: 1968,
};

// 2
console.log(car.year);

// 3
car.year = 1999;
console.log(car.year);

// 4
car.color = "green";
console.log(car);

// 5
delete car.model;
console.log(car);

// 6
const car = {
	brand: "Mercedes-Benz",
	model: "280SE",
	year: 1968,
	displayInfo: function () {
		console.log(
			`brand: ${this.brand}, model: ${this.model}, year: ${this.year}`
		);
	},
};
car.displayInfo();

// 7
const person = {
	name: "Aizat",
	address: {
		streetNameNumber: "Tynystanova 94",
		city: "Bishkek",
	},
};
console.log(person);

// 8
const teacher1 = {
	name: "Nursultan",
	age: 28,
};

const teacher2 = {
	name: "Nursultan",
	age: 28,
};
const objCompr = teacher1 === teacher2;
console.log(objCompr);

// 9
const newObj = "newObj";
const value = "new object";
car[newObj] = value;
console.log(car);

// 10
const car = {
	brand: "Mercedes-Benz",
	model: "280SE",
	year: 1968,
};
const carCopy = Object.assign({}, car);

// Тяжелые задачи
// 11
function createStudent(name, age) {
	return {
		name: name,
		age: age,
	};
}
const students = createStudent("Ice", 20);
console.log(students);

// 12
function changeAge(student, newAge) {
	student.age = newAge;
}

const student = {
	name: "Ice",
	age: 20,
};
changeAge(student, 21);
console.log(changeAge);

// 13
function createAnimal(type, sound) {
	return {
		type: type,
		sound: sound,
	};
}
const snake = createAnimal("Snake", "Thhhh");
const dog = createAnimal("Dog", "Wof");
const cat = createAnimal("Cat", "Meo");

console.log(dog);
console.log(car);
console.log(snake);
