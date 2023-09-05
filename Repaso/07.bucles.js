for (let i = 0; i <= 10; i++) {
  console.log(i);
}

const numbers = [4, 6, 3, 2, 7, 1, 8, 10, 87, 22, 12, 9];

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  const newNumber = number * 5;
  console.log(newNumber);
}

for (const number of numbers) {
  const newNumber = number * 5;
  console.log(newNumber);
}

numbers.forEach((number) => {
  const newNumber = number * 5;
  console.log(newNumber);
});

let counter = 0;

while (counter > 10) {
  console.log("Counter es: " + counter);
  counter++;
}

do {
  console.log("Hola");
} while (counter > 10);
{
  console.log("Counter es: " + counter);
  counter++;
}
