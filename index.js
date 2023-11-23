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

// fibonacci
function fibonacci(n) {
  const sequence = [0, 1];

  for (let i = 2; i < n; i++) {
    const nextNum = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextNum);
  }

  return sequence;
}

// console.log(fibonacci(10));

// check prime number
const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }

  return true;
};

// console.log(isPrime(3));

// sort array

function sortArray(arr) {
  const length = arr.length;

  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];

console.log(sortArray(unsortedArray));
