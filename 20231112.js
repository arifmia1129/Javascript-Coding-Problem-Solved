// Q-1: Explain what a callback function is and provide a simple example:

// Answer: Basically a callback function is a function that take another function as an argument and executed it after some previous operation

const modifyArr = (arr, callback) => {
  arr.push(100);

  callback();
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

modifyArr(arr, function () {
  // console.log("Array has been modified", arr);
});

// Q-2: Given a string, reverse each word in the sentence

// write an reusable function
const reverseBySeperator = (string, seperator) => {
  return string.split(seperator).reverse().join(seperator);
};

// try reverse entire sentence
const reverseEntireSentence = reverseBySeperator("binu", "");

// console.log(reverseEntireSentence);

// try reverse each word
const reverseEachWord = reverseBySeperator("I am Full Stack Developer", " ");

// console.log(reverseEachWord);

// ## How to check if an object is an array or not?

// There are several way to check it that is array or not. Bellow I explain 3 three ways to check it's data type is array or not

let param1 = "Md. Arif Mia";
let param2 = ["md", "arif", "mia"];

// Method-1:
const checkType1 = (param) => {
  if (Array.isArray(param)) {
    console.log("Your provided is an array");
  } else {
    console.log("Your provided data is not an array");
  }
};

// checkType1(param2);
function checkType2(param) {
  if (param instanceof Array) {
    console.log("It is an array");
  } else {
    console.log("It is not an array");
  }
}

// checkType2(param2);
const checkType3 = (param) => {
  if (param && typeof param === "object" && param.hasOwnProperty("length")) {
    console.log("It is an array");
  } else {
    console.log("It is not an array");
  }
};

// checkType3(param2);

// ## How to empty an array

let arrayList = ["a", "b", "c", "d", "e"];

// Method-1:
arrayList = [];

// Method-2:
let anotherArrayList = arrayList;
arrayList = [];
// console.log(arrayList, anotherArrayList);

// Method-3:
arrayList.splice(0, arrayList.length);

// console.log(arrayList);

// Method 4:
if (arrayList.length) {
  arrayList.pop();
}

// console.log(arrayList);

// ## How would check if a number is an interger?

function isInt(num) {
  return num % 1 === 0;
}

// console.log(isInt(4));
// console.log(isInt(4.5));

// ## Implement enqueue and dequeue using only two stacks

let inputStack = []; //First stack
let outputStack = []; //Second stack

// For enqueue, just push the item into the first stack

const enqueue = (stackInput, item) => {
  return stackInput.push(item);
};

const dequeue = (stackInput, stackOutput) => {
  if (stackOutput.length <= 0) {
    while (stackInput.length > 0) {
      var elementToOutput = stackInput.pop();
      console.log(elementToOutput);
      stackOutput.push(elementToOutput);
    }
  }
  return stackOutput.pop();
};

console.log(dequeue([1, 2, 3], []));
