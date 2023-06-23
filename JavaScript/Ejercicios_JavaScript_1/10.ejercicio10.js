const numbers = [1, 2, 3, 5, 45, 37, 58];
const otherNumbers = [2, 25, 60, 78, 100, 567];

function sumAll(param) {
  let counter = 0;
  for (const num of param) {
    counter += num;
  }
  console.log(counter);
}

sumAll(numbers);
sumAll(otherNumbers);
