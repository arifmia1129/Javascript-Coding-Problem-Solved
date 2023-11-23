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
