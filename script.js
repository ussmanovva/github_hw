// 1
// for(let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// 2
// for (let i = 0; i <= 100; i += 2) {
// 		console.log(i);
// }

// 3
// let sum = 0;
// for (let i = 0; i <= 100; i++) {
// 	if (i % 2 == 0) sum += i;
// }
// console.log(sum);

// 4
// const nums = [10, 20, 30];
// nums[2] = 99;
// console.log(nums);

// 5
// function getLastValue(arr) {
// 	return arr[arr.length - 1];
// }
// console.log(getLastValue([1, 20, 22, 24, 5]));
// console.log(getLastValue(["hi", "hello", "good"]));

// 6
// for (let i = 5; i >= 0; i--) {
// 	console.log(i);
// }

// 7
// let i = 0;
// while (i <= 100) {
// 	console.log(i);
// 	i++;
// }

// 8
// let i = 0;
// while (i <= 100) {
// 	console.log(i);
// 	i += 2;
// }

// 9
// let array = [1, 2, 3];
// let newArray = [];
// for (let i = 0; i < array.length; i++) {
// 	newArray.push(array[i] + 1);
// }
// console.log(newArray);

// 10
// const addNum = (array, num) => {
// 	let newArray = [];
// 	for (i = 0; i < array.length; i++) {
// 		newArray.push(array[i] + num);
// 	}
// 	return newArray;
// };
// console.log(addNum([1, 4, 9], 5));

// 11
const strings = ["seek", "search", "look for"];
let index = strings.indexOf("search");

if (strings.includes("search")) {
	console.log(index);
} else {
	console.log(index);
}

// 12
// const countPositive = (nums) => {
// 	let positiveCount = 0;
// 	for (i = 0; i < nums.length; i++) {
// 		if (nums[i] > 0) {
// 			positiveCount++;
// 		}
// 	}
// 	return positiveCount;
// };
// console.log(countPositive([2, -7, 4, 4]));

// 13
// const removeEgg = (foods) => {
// 	const upd = [];
// 	for (i = 0; i < foods.length; i++) {
// 		if (foods[i] === "egg") {
// 			continue;
// 		} else {
// 			upd.push(foods[i]);
// 		}
// 	}
// 	return upd;
// };

// console.log(removeEgg(["egg", "apple", "egg", "ham"]));

// 14
// const findIndex = (array, word) => {
// 	let index = array.indexOf(word);

// 	if (array.includes(word)) {
// 		return index;
// 	} else {
// 		return index;
// 	}
// };
// console.log(findIndex(["green", "red", "purple", "blue"], "purple"));

// 15
// const addArrays = (array1, array2) => {
// 	const resultarray = [];
// 	for (i = 0; i < array1.length; i++) {
// 		console.log(array1[i] + array2[i]);
// 	}
// };
// addArrays([0, 2, 4], [1, 3, 5]);

// 16
// const minMax = (nums) => {
// 	let min = nums[0];
// 	let max = nums[0];

// 	for (let i = 1; i < nums.length; i++) {
// 		if (nums[i] < min) {
// 			min = nums[i];
// 		}
// 		if (nums[i] > max) {
// 			max = nums[i];
// 		}
// 	}
// 	return { min, max };
// };
// console.log(minMax([9, -7, -8, 7]));

// 17
// const answer = {};
// const countWords = (words) => {
// 	for (let i = 0; i < words.length; i++) {
// 		if (answer[words[i]]) {
// 			answer[words[i]] += 1;
// 		} else {
// 			answer[words[i]] = 1;
// 		}
// 	}
// 	return answer;
// };
// console.log(countWords(["apple", "grape", "apple", "grape", "strawberry"]));
