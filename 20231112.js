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
