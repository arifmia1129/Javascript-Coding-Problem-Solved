// Q-1: Explain what a callback function is and provide a simple example:

// Answer: Basically a callback function is a function that take another function as an argument and executed it after some previous operation

const modifyArr = (arr, callback) => {
  arr.push(100);

  callback();
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

modifyArr(arr, function () {
  console.log("Array has been modified", arr);
});
