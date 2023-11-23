// array reduce method
const arr = [1, 2, 3];

const sum = arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

// console.log(sum);

// Promise resolves
const handleFetchedData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Fetched data");
    }, 2000);
  });
};

// handleFetchedData().then((data) => console.log(data));

// Create a function that receives an array of numbers and returns an array containing only the positive numbers

const ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

function modifyArr(arr) {
  const modifiedArr = [];
  for (const el of arr) {
    if (el > 0) {
      modifiedArr.push(el);
    }
  }

  return modifiedArr;
}

// console.log(modifyArr(ar));

// Find the maximum number in an array of numbers
const findMax = (arr) => {
  let maxNumber = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
      maxNumber = arr[i];
    }
  }

  return maxNumber;
};

// console.log(findMax(ar));
