const numbers = [12, 21, 38, 5, 45, 37, 6];
const otherNumbers = [4, 5, 7];
function average(param) {
  let total = 0;
  for (const number of param) {
    total += number;
  }
  const quantity = param.length;
  console.log(total / quantity);
}

average(numbers);
average(otherNumbers);
